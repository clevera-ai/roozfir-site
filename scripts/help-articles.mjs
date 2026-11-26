// New help articles (written in the same plain style as the first 20). Used by help-gen.mjs.
export const SECTIONS = ['Getting started', 'Concepts', 'Projects and time', 'Customers and invoices', 'Reports, team and automations', 'Account and settings', 'Connecting other tools', 'Putting Roozfir on your website']

const fig = (file, alt, o = {}) =>
  `<figure><img src="../img/${file}" alt="${alt}" width="${o.w ?? 1440}" height="${o.h ?? 900}" loading="lazy"><figcaption>${alt}</figcaption></figure>`

export const NEW_ARTICLES = [
  // ---------------------------------------------------------------- conceptual, no screens
  { slug: 'what-is-a-billable-rate', title: 'What is a billable rate?', section: 'Concepts', body: `
<p class="intro">A billable rate is the amount you charge for one hour of work. Roozfir multiplies it by the hours on an invoice line to get the amount.</p>
<h2>Where the rate comes from</h2>
<p>Roozfir looks for a rate in two places, in this order:</p>
<ol>
<li>The <b>hourly rate</b> saved on the customer (the account). If a customer has one, it is always used for that customer's time.</li>
<li>Your <b>default hourly rate</b>, set under Settings. It is used for any customer without a rate of their own.</li>
</ol>
<p>Changing a rate does not change invoices you have already created. It only affects lines you add afterwards.</p>
<h2>Billable and non-billable time</h2>
<p>Every time entry is either billable or non-billable. Only billable entries are offered when you build an invoice and only they count towards the billable amount in your reports. A team meeting you do not charge for is a good example of non-billable time.</p>
<h2>Rates and currency</h2>
<p>Rates are shown in the currency you chose for the workspace. Changing the currency does not convert any rates, so check them afterwards. See <a href="change-your-currency-and-default-rate.html">Change your currency and default rate</a> and <a href="how-roozfir-rounds-time.html">How Roozfir rounds time</a> for what happens to the hours.</p>` },
  { slug: 'how-roozfir-rounds-time', title: 'How Roozfir rounds time', section: 'Concepts', body: `
<p class="intro">Roozfir keeps time in whole minutes and shows it as hours and minutes. This page explains where rounding happens, so the numbers on an invoice never surprise you.</p>
<h2>The timer</h2>
<p>When you stop the timer, the elapsed time is rounded to the nearest minute. Anything under a minute is counted as one minute, so an entry is never zero.</p>
<h2>Typing a duration yourself</h2>
<p>When you add or edit an entry you can type the duration in any of these ways: <code>1:30</code>, <code>1.5</code>, <code>90m</code> or <code>1h 30m</code>. All four mean one and a half hours. A plain number is read as hours. Nothing is rounded up to a quarter hour or any other block.</p>
<h2>Invoices</h2>
<p>When you add tracked time to an invoice, the minutes are turned into hours with two decimals (75 minutes becomes 1.25 hours). The amount of each line is the hours times the rate, and tax is worked out on the total and rounded to the nearest cent.</p>
<h2>Reports</h2>
<p>Reports add up the minutes first and only then show them as hours and minutes, so the total is exact even if each entry looks rounded.</p>` },

  // ---------------------------------------------------------------- feature that t17 removes
  { slug: 'track-expenses', title: 'Track expenses on a project', section: 'Projects and time', body: `
<p class="intro">Use expenses to record money you spend on a project, such as stock photos or a domain name, and to mark whether the customer pays it back.</p>
<ol>
<li>Click <b>Projects</b> in the left-hand menu and open the project by clicking its name. The project page has an <b>Add expense</b> button at the top right.
${fig('expense-button.png', 'The Website redesign project page with the Add expense button in the top right corner')}</li>
<li>Click <b>Add expense</b>.</li>
<li>Type a <b>Description</b> and an <b>Amount</b>. Choose the date, and tick <b>Billable to the client</b> if the customer should be charged for it.
${fig('expense-dialog.png', 'The Add expense form filled in with Domain renewal and an amount of 45')}</li>
<li>Click <b>Save expense</b>. The expense shows up in the Expenses list at the bottom of the project page.
${fig('expense-added.png', 'The project page with the new Domain renewal expense listed under Expenses')}</li>
</ol>
<p class="tip"><b>Tip:</b> Expenses are listed on the project they belong to. There is no separate expenses page.</p>` },

  // ---------------------------------------------------------------- duplicate of an existing flow
  { slug: 'start-your-first-project', title: 'Start your first project', section: 'Projects and time', body: `
<p class="intro">A project is where your time and invoices for one piece of work come together. Here is how to start your first one.</p>
<ol>
<li>Click <b>Projects</b> in the left-hand menu. Then click <b>Start new project</b> at the top right.
${fig('first-project-list.png', 'The Projects page with the Start new project button at the top right')}</li>
<li>Type a <b>Project name</b> and choose the <b>Account</b> (your customer) from the list.</li>
<li>A <b>Billing contact</b> box appears once you have chosen an account. Type the person who should receive the invoices. It is required.</li>
<li>If you like, add a <b>Budget</b>. Roozfir warns you as the money runs out.
${fig('first-project-dialog.png', 'The new project form with the name Spring campaign, the account Bluebird Coffee, a billing contact and a budget of 5000')}</li>
<li>Click <b>Create project</b>. Saving takes a few seconds and the button shows a spinner while it works. Please wait for the message "Created Spring campaign" before you close the page.
${fig('first-project-saving.png', 'The new project form while it is saving, with the spinner on the Creating button')}</li>
<li>The new project appears in the list with the stage "Planned".
${fig('first-project-created.png', 'The projects list with the new Spring campaign project')}</li>
</ol>
<p>You can also create a project in three steps with the guided setup. See <a href="create-a-project-with-the-wizard.html">Create a project with the wizard</a>.</p>` },

  // ---------------------------------------------------------------- destructive
  { slug: 'delete-your-workspace', title: 'Delete your workspace', section: 'Account and settings', body: `
<p class="intro">Deleting a workspace removes its projects, time entries and invoices for everyone on your team. Only do this if you are sure.</p>
<ol>
<li>Click <b>Settings</b> in the left-hand menu, then open the <b>Delete workspace</b> tab.
${fig('delete-ws-page.png', 'The Delete workspace tab in Settings with a box to type the workspace name')}</li>
<li>Type the name of your workspace exactly as it is shown, for example <b>Fernhill Creative</b>, in the confirmation box. The <b>Delete workspace</b> button stays grey until the name matches.
${fig('delete-ws-typed.png', 'The workspace name typed in the confirmation box and the Delete workspace button now red')}</li>
<li>Click <b>Delete workspace</b>.</li>
<li>A red bar appears across the top of every page to say the workspace is scheduled for deletion. Until it is gone you can click <b>Restore workspace</b> in that bar to change your mind.
${fig('delete-ws-done.png', 'The dashboard with a red bar saying Fernhill Creative is scheduled for deletion and a Restore workspace button')}</li>
</ol>
<p class="tip"><b>Before you delete:</b> download anything you want to keep, for example a report as a CSV file. Deleting cannot be undone once the workspace is gone.</p>` },
  { slug: 'cancel-your-plan', title: 'Cancel your plan', section: 'Account and settings', body: `
<p class="intro">You can cancel your Roozfir plan at any time. Your plan stays active until the end of the period you have already paid for.</p>
<ol>
<li>Click <b>Plan and billing</b> in the left-hand menu. Your current plan is shown with a red <b>Cancel plan</b> button underneath.
${fig('cancel-plan-page.png', 'The Plan and billing page showing the Pro plan and the Cancel plan button')}</li>
<li>Click <b>Cancel plan</b>. A box asks you to confirm.
${fig('cancel-plan-confirm.png', 'The Cancel your plan confirmation box with the buttons Keep my plan and Yes, cancel plan')}</li>
<li>Click <b>Yes, cancel plan</b>. The page now says your plan is set to cancel at the end of this billing period.
${fig('cancel-plan-done.png', 'The Plan and billing page with the message that the plan is set to cancel at the end of this billing period')}</li>
</ol>
<p>Changed your mind? Click <b>Keep my plan</b> in that message before the period ends and nothing changes.</p>` },

  // ---------------------------------------------------------------- plan-gated
  { slug: 'set-up-xero-sync-business-plan', title: 'Set up Xero sync (Business plan)', section: 'Connecting other tools', body: `
<p class="intro">Sync to Xero sends your Roozfir invoices to your accounting software. It is part of the <b>Business</b> plan.</p>
<ol>
<li>Click <b>Invoices</b>, then open the <b>Sync to Xero</b> tab. If you are on the Pro plan you will see a page saying Sync to Xero needs the Business plan.
${fig('xero-wall.png', 'The Sync to Xero tab on the Pro plan, saying it needs the Business plan, with an Upgrade button')}</li>
<li>Click <b>Upgrade</b>. This opens <b>Plan and billing</b>. Click <b>Switch plan</b>, choose <b>Upgrade to Business</b> and then <b>Confirm switch</b>.
${fig('plans-business.png', 'The plans page with Solo, Pro and Business and the Upgrade to Business button')}</li>
<li>Go back to <b>Invoices</b> &raquo; <b>Sync to Xero</b>. If Xero is not connected yet, you are asked to connect it first. Open <b>Settings</b> &raquo; <b>Connected apps</b> and click <b>Link account</b> on the Xero card.
${fig('xero-business-connect.png', 'The Sync to Xero tab asking you to connect Xero first')}</li>
<li>Back on the Sync to Xero tab, choose the <b>Sales account</b> and decide whether to <b>Sync new invoices automatically</b>. Click <b>Save sync settings</b>.
${fig('xero-business-sync.png', 'The Sync to Xero tab with the organisation connected, the sales account, the automatic toggle and a list of invoices')}</li>
<li>To send an invoice that is already in Roozfir, click <b>Sync now</b> on its row. The status changes to Synced.
${fig('xero-business-synced.png', 'The invoice list with FH-0002 now showing Synced')}</li>
</ol>` },
  { slug: 'build-a-workflow', title: 'Build a workflow', section: 'Reports, team and automations', body: `
<p class="intro">Workflows do a job for you when something happens, for example email a reminder when an invoice becomes overdue. They are part of the <b>Business</b> plan.</p>
<ol>
<li>Click <b>Workflows</b> in the left-hand menu. On the Pro plan you see a page that says Workflows need the Business plan, with an <b>Upgrade</b> button that takes you to Plan and billing.
${fig('workflow-wall.png', 'The Workflows page on the Pro plan saying it needs the Business plan, with an Upgrade button')}</li>
<li>On the Business plan the page lists your existing workflows. Each one has an on and off switch.
${fig('workflow-list.png', 'The Workflows page on the Business plan listing one workflow with its switch')}</li>
<li>Click <b>New rule</b>, type a <b>Rule name</b> and choose what should start it under <b>Trigger</b>.
${fig('workflow-builder.png', 'The new workflow form with the name Nudge on overdue invoices and the trigger An invoice becomes overdue')}</li>
<li>Add conditions if the workflow should only run sometimes, choose what Roozfir should do, and click <b>Save rule</b>.</li>
</ol>
<p>The conditions and actions work the same way as described in <a href="set-up-an-automation-rule.html">How to set up an automation rule</a>.</p>` },

  // ---------------------------------------------------------------- data-dependent
  { slug: 'approve-your-teams-timesheets', title: "Approve your team's timesheets", section: 'Reports, team and automations', body: `
<p class="intro">When a teammate finishes their week they can submit their timesheet to you. Approved timesheets are locked, so the hours cannot change before you invoice them.</p>
<ol>
<li>Click <b>People</b> in the left-hand menu and open the <b>Approve timesheets</b> tab.
${fig('approvals-tab.png', 'The People page with the Members, Permissions and Approve timesheets tabs')}</li>
<li>Each submitted timesheet is listed with the teammate's name and the week. Open one to check the hours.</li>
<li>Click <b>Approve</b> if the hours look right, or <b>Send back</b> with a note if something needs fixing.</li>
</ol>
<p>If nobody has submitted a timesheet, the tab shows a message that there is nothing to approve.
${fig('approvals-empty.png', 'The Approve timesheets tab with the message No timesheets to approve')}</p>` },

  // ---------------------------------------------------------------- sign out
  { slug: 'sign-out-and-sign-back-in', title: 'Sign out and sign back in', section: 'Getting started', body: `
<p class="intro">Sign out when you share a computer, or when you want to switch to a different account.</p>
<ol>
<li>Click your name at the top right of any page. A menu opens.
${fig('signout-menu.png', 'The user menu open with Profile settings, Back to roozfir.online and Sign out')}</li>
<li>Click <b>Sign out</b>. You land on the sign-in page.</li>
<li>To sign back in, type your <b>Email</b> and <b>Password</b> and click <b>Sign in</b>.
${fig('signin-page.png', 'The Roozfir sign-in page with the Email and Password boxes and the Sign in button')}</li>
</ol>
<p class="tip"><b>Tip:</b> Signing out does not delete anything. Your projects, time and invoices are all there when you sign back in.</p>` },

  // ---------------------------------------------------------------- long guide, 3 flows
  { slug: 'the-complete-invoicing-guide', title: 'The complete invoicing guide', section: 'Customers and invoices', body: `
<p class="intro">This guide takes you from your first customer to an invoice in their inbox, and then shows how to bill a customer automatically every month. It covers three jobs: adding an account, creating and sending an invoice, and setting up a recurring invoice.</p>
<h2>Part 1. Add the customer</h2>
<ol>
<li>Click <b>Accounts</b> in the left-hand menu. This is the list of your customers.
${fig('guide-accounts.png', 'The Accounts page listing Northwind Studio, Bluebird Coffee, Harbor and Pine and Kestrel Labs')}</li>
<li>Click <b>Add account</b>, type the <b>Name</b> and <b>Email</b>, and, if this customer has their own rate, an hourly rate. Click <b>Save account</b>.</li>
<li>Check that the new account is in the list. You only do this once per customer.</li>
</ol>
<h2>Part 2. Create and send an invoice</h2>
<ol>
<li>Click <b>Invoices</b>. All your invoices are listed with their status: draft, sent or paid.
${fig('guide-invoices.png', 'The Invoices page with three invoices and the New invoice button')}</li>
<li>Click <b>New invoice</b> and choose the <b>Account</b>.</li>
<li>Tick <b>Include</b> next to the time entries you want to bill and click <b>Add selected time</b>. They become line items with the hours and the customer's rate. You can add more lines with <b>Add line item</b> and choose a <b>Tax rate</b>.
${fig('guide-invoice-editor.png', 'The invoice editor with two time entries added as line items')}</li>
<li>Click <b>Preview invoice</b>. Read it through, then click <b>Send to client</b>.
${fig('guide-invoice-preview.png', 'The invoice preview with the line items, tax and total and the Send to client button')}</li>
</ol>
<h2>Part 3. Bill a customer every month</h2>
<ol>
<li>On the Invoices page open the <b>Recurring</b> tab.
${fig('guide-recurring.png', 'The Recurring tab listing a monthly retainer for Kestrel Labs')}</li>
<li>Click <b>New schedule</b>. Choose the account, give it a title such as "Monthly retainer", enter the amount and choose how often it repeats.</li>
<li>Pick the <b>Start date</b> in the date picker. Roozfir shows the next three dates so you can check them, then click <b>Save schedule</b>.</li>
</ol>
<p class="tip"><b>Tip:</b> A recurring invoice is created on its date. You still send it yourself from the Invoices list.</p>` },

  // ---------------------------------------------------------------- FAQ with <details>, dead link
  { slug: 'frequently-asked-questions', title: 'Frequently asked questions', section: 'Getting started', body: `
<p class="intro">Quick answers to the questions we hear most. Click a question to open it.</p>
<details><summary>Can I use Roozfir on my phone?</summary><p>Yes. The menu folds into a button at the top left on small screens and everything else works the same.</p></details>
<details><summary>Why is my invoice number not what I expected?</summary><p>Numbers start with the prefix you chose during setup, then count up. See the <a href="/help/articles/old-invoice-numbering.html">invoice numbering guide</a> for how to change the prefix.</p></details>
<details><summary>Does Roozfir round my time?</summary><p>Only to the nearest minute when you stop the timer. Read <a href="how-roozfir-rounds-time.html">How Roozfir rounds time</a> for the details.</p></details>
<details><summary>How do I give someone else access?</summary><p>Click <b>People</b>, then <b>Add teammate</b>. You choose a role, and you can fine-tune what each role can do under Permissions.</p></details>
<details><summary>Which plan do I need for Xero and workflows?</summary><p>Both need the Business plan. See <a href="set-up-xero-sync-business-plan.html">Set up Xero sync</a> and <a href="build-a-workflow.html">Build a workflow</a>.</p></details>
<details><summary>I see a cookie message on every visit.</summary><p>Choose Accept all, Reject all or Customise once and we remember it on this device. You can change it later in <a href="change-your-cookie-preferences.html">Settings, Privacy</a>.</p></details>
<details><summary>Where is my data stored?</summary><p>Roozfir is a demo product. Everything you enter is kept in your own browser and can be cleared at any time.</p></details>` },

  // ---------------------------------------------------------------- troubleshooting
  { slug: 'why-cant-i-see-the-timer', title: "Why can't I see the timer?", section: 'Getting started', body: `
<p class="intro">The timer lives on one page, so it is easy to miss. Work through these checks in order.</p>
<h2>1. Open the Time page</h2>
<p>Click <b>Time</b> in the left-hand menu. The timer is the card at the top of the page, with a box for what you are working on, a project list and the <b>Start timer</b> button.
${fig('timer-where.png', 'The Time page with the timer card at the top and the Start timer button')}</p>
<h2>2. Look for the running badge</h2>
<p>While a timer is running, a <b>Timer running</b> badge appears at the top right of every page, next to your name. Click it to jump back to the timer.
${fig('timer-badge.png', 'The top bar of the Projects page with the Timer running badge next to the user name', { h: 110 })}</p>
<h2>3. Check the project list</h2>
<p>The timer only lists projects that are not finished. If the project you want is in the Done stage, move it back to Review or In progress first.</p>
<h2>4. Still nothing?</h2>
<p>Reload the page. If you opened Roozfir in a private window, your timer is kept in that window only.</p>` },

  // ---------------------------------------------------------------- German
  { slug: 'einen-kunden-hinzufuegen', title: 'Einen Kunden hinzufügen', section: 'Customers and invoices', lang: 'de', body: `
<p class="intro">Kunden sind die Grundlage für Projekte und Rechnungen. In Roozfir heißen sie „Accounts“. Die Bedienoberfläche der App ist zurzeit nur auf Englisch verfügbar, deshalb stehen die Namen der Schaltflächen unten auf Englisch.</p>
<ol>
<li>Klicken Sie im Menü links auf <b>Accounts</b>.
${fig('de-accounts.png', 'Die Seite Accounts mit der Liste der Kunden und der Schaltfläche Add account oben rechts')}</li>
<li>Klicken Sie auf <b>Add account</b>.</li>
<li>Geben Sie den <b>Name</b> und die <b>Email</b> des Kunden ein. Wenn der Kunde einen eigenen Stundensatz hat, tragen Sie ihn bei <b>Hourly rate</b> ein.
${fig('de-account-dialog.png', 'Das Formular für einen neuen Kunden, ausgefüllt mit Alder und Finch und einer E-Mail-Adresse')}</li>
<li>Klicken Sie auf <b>Save account</b>. Der neue Kunde erscheint in der Liste.
${fig('de-account-saved.png', 'Die Kundenliste mit dem neuen Kunden Alder und Finch')}</li>
</ol>
<p class="tip"><b>Tipp:</b> Viele Kunden auf einmal können Sie über <b>Import accounts</b> aus einer CSV-Datei laden.</p>` },

  // ---------------------------------------------------------------- controls: flows t16 does not change, screenshots from the current app
  { slug: 'update-your-profile', title: 'Update your profile', section: 'Account and settings', body: `
<p class="intro">Your profile is the name, email address and job title other people in your workspace see.</p>
<ol>
<li>Click <b>Settings</b> in the left-hand menu. The <b>Profile</b> tab opens first.
${fig('ctl-profile.png', 'The Profile tab in Settings with the full name, email, job title, time zone and appearance fields')}</li>
<li>Change your <b>Full name</b>, <b>Email address</b>, <b>Job title</b> or <b>Time zone</b>. The <b>Appearance</b> list switches between light and dark.</li>
<li>Click <b>Save</b>. A message confirms "Profile saved".</li>
</ol>` },
  { slug: 'change-your-currency-and-default-rate', title: 'Change your currency and default rate', section: 'Account and settings', body: `
<p class="intro">The currency decides how every amount in Roozfir is shown. The default hourly rate is used for customers who do not have a rate of their own.</p>
<ol>
<li>Click <b>Settings</b>, then open the <b>Currency</b> tab.
${fig('ctl-currency.png', 'The Currency tab in Settings with the currency list and the default hourly rate')}</li>
<li>Choose the <b>Currency</b> and type the <b>Default hourly rate</b>. The line underneath shows how the rate will look.</li>
<li>Click <b>Save currency</b>.</li>
</ol>
<p>Changing the currency does not convert existing rates or invoices. See <a href="what-is-a-billable-rate.html">What is a billable rate?</a></p>` },
  { slug: 'choose-your-notifications', title: 'Choose which notifications you get', section: 'Account and settings', body: `
<p class="intro">Roozfir can email you a weekly summary, tell you when an invoice is paid and more. Turn on only what you want.</p>
<ol>
<li>Click <b>Settings</b>, then open the <b>Notifications</b> tab.
${fig('ctl-notifications.png', 'The Notifications tab in Settings with switches for the weekly summary, invoice paid, timer left running and product news')}</li>
<li>Use each switch to turn a notification on or off.</li>
<li>Click <b>Save notifications</b>.</li>
</ol>` },
  { slug: 'edit-an-email-template', title: 'Edit an email template', section: 'Account and settings', body: `
<p class="intro">Templates are the emails Roozfir sends for you, such as the invoice email and the payment reminder. You can change the wording and add details that fill themselves in.</p>
<ol>
<li>Click <b>Settings</b>, then open the <b>Email templates</b> tab.
${fig('ctl-templates.png', 'The Email templates tab with the template list, subject line, message editor and preview')}</li>
<li>Choose the <b>Template</b> you want to change and edit the <b>Subject</b> and the message.</li>
<li>To add something that fills in by itself, such as the customer's name, click <b>Insert variable</b> and choose it from the list. Words in double curly brackets, like <code>{{client.name}}</code>, are replaced when the email is sent.</li>
<li>Click <b>Save template</b>.</li>
</ol>` },

  // ---------------------------------------------------------------- ordinary in-app + format traps
  { slug: 'open-a-projects-sharing-settings', title: "Open a project's sharing settings", section: 'Projects and time', body: `
<p class="intro">Sharing settings decide whether a project has a public status page. There is no menu entry for it: you reach it from the project itself.</p>
<ol>
<li>Click <b>Projects</b> and open the project by clicking its name. Click the <b>Sharing settings</b> button at the top of the page, next to Share on your site (marked in red below).
${fig('sharing-button-annotated.png', 'The project page with a red box and a red arrow pointing at the Sharing settings button')}</li>
<li>Switch on <b>Public status page</b> if you want anyone with the link to see the project's stage. The link appears underneath.
${fig('sharing-page.png', 'The sharing settings page with Public status page switched on and the share link shown')}</li>
<li>Choose <b>Who can view</b> and whether to <b>Show budget progress</b>, then click <b>Save sharing settings</b> (marked in red below).
${fig('sharing-page-annotated.png', 'The sharing settings page with a red box and arrow around the Save sharing settings button')}</li>
</ol>
<p>The page address ends in the project's id, for example <code>/projects/p-website/sharing</code>.</p>` },
  { slug: 'create-a-project-with-the-wizard', title: 'Create a project with the wizard', section: 'Projects and time', body: `
<p class="intro">The guided setup walks you through a new project in three short steps: details, budget and review.</p>
<ol>
<li>On the <b>Projects</b> page click <b>Guided setup</b>, next to Start new project.
${fig('wizard-entry.png', 'The Projects page with the Guided setup button next to Start new project')}</li>
<li><b>Step 1, Details.</b> Type the project name, choose the account, then type the billing contact that appears. Click <b>Next</b>.
${fig('wizard-1.png', 'Step 1 of 3 with the project name, account and billing contact filled in')}</li>
<li><b>Step 2, Budget.</b> Enter a budget if you have one and add a description. Click <b>Next</b>.
${fig('wizard-2.png', 'Step 2 of 3 with a budget of 4000 and a short description')}</li>
<li><b>Step 3, Review.</b> Check the summary and click <b>Create project</b>. Saving takes a few seconds.
${fig('wizard-3.png', 'Step 3 of 3 with a summary of the project and the Create project button')}</li>
</ol>
<p>Use <b>Back</b> on any step to change your answers. Each step has its own page address: details, budget and review.</p>` },
  { slug: 'manage-tags', title: 'Add and delete tags', section: 'Projects and time', body: `
<p class="intro">Tags are short labels you put on time entries, like "design" or "meeting", so you can filter the time table later.</p>
<ol>
<li>Click <b>Settings</b> and open the <b>Tags</b> tab. Your tags are listed in a table.
${fig('tags-table.png', 'The Tags tab with a table of tags and the Add tag link under the table')}</li>
<li>Click <b>+ Add tag</b>. A new row appears with an empty name. Click in the name cell and type the tag, for example "Urgent". There is no separate form: the table cell is the editor.
${fig('tags-new.png', 'The Tags table with a tag named Urgent and a new empty row')}</li>
<li>To delete tags, tick the box at the start of each row. A bar appears above the table with a <b>Delete</b> button. Tags cannot be deleted one by one.
${fig('tags-bulk.png', 'The Tags table with two rows ticked and the bulk bar showing 2 selected and Delete')}</li>
</ol>` },
  { slug: 'see-recent-activity', title: 'See what happened recently on the Activity page', section: 'Reports, team and automations', body: `
<p class="intro">The Activity page lists everything that happened in your workspace, newest first: time logged, invoices sent, projects moved.</p>
<ol>
<li>Click <b>Activity</b> under Work in the left-hand menu.
${fig('activity-top.png', 'The Activity page showing the most recent entries')}</li>
<li>Scroll down. Roozfir loads more entries each time you reach the bottom, so the list has no pages and no Next button. At the very end it says you have reached the beginning.</li>
</ol>
<p>This is the whole page after scrolling all the way down:</p>
${fig('activity-full.png', 'The complete Activity page after loading every entry, a very long list of changes', { h: 5702 })}` },
  { slug: 'change-your-cookie-preferences', title: 'Change your cookie preferences', section: 'Account and settings', body: `
<p class="intro">The first time you open Roozfir a bar at the bottom of the page asks about cookies. You can change your answer whenever you like.</p>
<ol>
<li>Click <b>Settings</b> and open the <b>Privacy</b> tab.
${fig('privacy-page.png', 'The Privacy tab in Settings showing the current cookie choices and the Change cookie preferences button')}</li>
<li>Click <b>Change cookie preferences</b>. A window opens with a switch for <b>Analytics</b> and one for <b>Marketing</b>. Essential cookies are always on because the app needs them to keep you signed in.
${fig('cookie-prefs.png', 'The Cookie preferences window with the Essential, Analytics and Marketing switches')}</li>
<li>Click <b>Save preferences</b>.</li>
</ol>` },
  { slug: 'take-the-dashboard-tour', title: 'Take the dashboard tour', section: 'Getting started', body: `
<p class="intro">The first time you open the dashboard, Roozfir points out three things in a short tour.</p>
<p>Watch the whole tour (about ten seconds):</p>
<video controls width="640" poster="../img/tour-step1.png" preload="metadata"><source src="../video/dashboard-tour.mp4" type="video/mp4">Your browser does not play this video. The steps are listed below.</video>
<ol>
<li>The first tip points at the three cards at the top: hours this week, unbilled time and what customers still owe you.</li>
<li>The second tip points at the menu on the left, where projects, time and invoices live.</li>
<li>The third tip points at the search bar. Press it, or press Cmd or Ctrl and K, to jump to any page.</li>
</ol>
<p>Click <b>Next</b> to move on, <b>Skip</b> to stop, and <b>Done</b> on the last tip. You can also start a longer tour at any time with <b>Take the tour</b> at the top of the dashboard.</p>` },
  { slug: 'use-the-command-palette', title: 'Jump anywhere with the command palette', section: 'Getting started', body: `
<p class="intro">The command palette is the quickest way around Roozfir. Type what you want and press Enter.</p>
<p><img src="../img/command-palette.gif" alt="An animation: the search bar is pressed, the word invoice is typed and the New invoice page opens" width="800" height="311" loading="lazy"></p>
<ol>
<li>Click the search bar at the top of any page, or press Cmd or Ctrl and K.</li>
<li>Type a few letters, for example <b>invoice</b>. The list narrows down to matching pages and actions.</li>
<li>Use the arrow keys to pick one and press <b>Enter</b>, or just click it.</li>
</ol>
<p>Press Escape to close the palette without doing anything.</p>` },
  { slug: 'chat-with-support', title: 'Chat with support', section: 'Getting started', body: `
<p class="intro">Stuck? Send us a message from the chat button that sits in the corner of every page.</p>
<ol>
<li>Click the round chat button at the bottom right of the page.</li>
<li>Type your name, your email address and your question under <b>How can we help?</b>.
<figure><img src="https://raw.githubusercontent.com/clevera-ai/roozfir-site/main/public/help/img/chat-open.png" alt="The Chat with us panel open in the bottom right corner with name, email and message boxes" width="1440" height="900" loading="lazy"><figcaption>The Chat with us panel open in the bottom right corner with name, email and message boxes</figcaption></figure></li>
<li>Click <b>Send message</b>. We reply by email, usually within a day.</li>
</ol>
<p class="tip"><b>Note:</b> The chat button covers whatever is in the bottom right corner of the page. If you need that spot, close the panel first.</p>` },
  { slug: 'delete-time-entries-without-a-description', title: 'Delete time entries without a description', section: 'Projects and time', body: `
<p class="intro">Time entries you saved without a description have no name, so they only show a date and a duration. They also have no Delete button of their own. Here is how to remove them.</p>
<ol>
<li>Click <b>Time</b>. Entries without a description show an empty Note column.
<figure><img src="../img/time-untitled.png" width="1440" height="900" loading="lazy"></figure></li>
<li>Tick the box at the start of each row you want to remove. A bar shows how many are selected.
${fig('bulk-selected.png', 'The time table with two blank entries ticked and the bulk bar showing 2 selected')}</li>
<li>Click <b>Delete</b> in the bar. A message confirms and offers Undo for a few seconds.
${fig('bulk-confirm.png', 'The message saying 2 entries were deleted with an Undo link')}</li>
</ol>` },
  { slug: 'fill-in-your-weekly-timesheet', title: 'Fill in your weekly timesheet', section: 'Projects and time', body: `
<p class="intro">The weekly timesheet is a grid: one row for each project and one column for each day. It is the fastest way to enter a whole week at once.</p>
<p>The steps are in the picture below. Follow the steps in the screenshot.</p>
<ol>
<li>See the screenshot.
<figure><img src="../img/weekly-timesheet-steps.png" alt="Steps for filling in the weekly timesheet" width="928" height="385" loading="lazy"></figure></li>
<li>When you are done, open the Entries tab to check that the new entries are there.</li>
</ol>` },
  { slug: 'read-the-insights-page', title: 'Read the Insights page', section: 'Reports, team and automations', body: `
<p class="intro">Insights shows how many hours you tracked, how many were billable and how much that is worth, for any customer and date range.</p>
<p>The page needs a few seconds to load its numbers, so you first see grey placeholder blocks:
<img src="../img/insights-loading.png" alt="The Insights page while loading, with grey placeholder blocks where the numbers will be" width="1440" height="900" loading="lazy"></p>
<ol>
<li>Click <b>Insights</b> in the left-hand menu and wait for the grey blocks to turn into numbers.</li>
<li>Choose an <b>Account</b> and set the <b>From</b> and <b>To</b> dates.</li>
<li>Read the three totals at the top, then the table of entries underneath. <b>Export CSV</b> saves the table as a file.
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="../img/insights-loaded.png" alt="The Insights page with the totals and the table of time entries" width="1440" height="900" class="lazyload"></li>
</ol>
<script>(function(){var els=document.querySelectorAll('img[data-src]');function load(i){i.src=i.getAttribute('data-src');i.removeAttribute('data-src')}if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){load(e.target);io.unobserve(e.target)}})});els.forEach(function(i){io.observe(i)})}else els.forEach(load)})()</script>` },
]
