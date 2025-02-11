
## 🚀 Getting Started diptayan

To get the project up and running, follow these steps:

1. **Clone the repository**:  
   First, clone the repository to your local machine by running the following command:
   ```bash
     git clone https://github.com/SRM-IST-KTR/githubsrmv2.git
   ```

2. **Install dependencies**:  
   Run the following command to install all necessary dependencies:
   ```bash
   yarn install
   ```

3. **Start the development server**:  
   Use the command below to start the server locally:
   ```bash
   yarn dev
   ```

4. **View the project**:  
   Open http://localhost:3000 in your browser to view the result.

5. **Edit the project**:  
   You can start editing the project by modifying `pages/index.js`. Any changes you make will automatically refresh in the browser.

6. **API Routes**:  
   API routes can be accessed at http://localhost:3000/api/hello.  
   This route can be edited in `pages/api/hello.js`. The `pages/api` directory is mapped to `/api/*`. Files in this directory behave as API routes, not as React pages.

7. **Font Optimization**:  
   This project uses `next/font` to automatically optimize and load Inter, a custom Google Font.

---

🛠️ Guidelines for Handling Repository Issues

Please follow these rules and instructions when contributing to the repository:

📋 **Claiming an Issue**:

1. **Check for issues**:  
   Visit the “Issues” section in the repository for open issues related to bug fixes, feature requests, or UI updates.

2. **Comment to claim**:  
   To work on an issue, you must claim it by commenting on the issue. Say something like, “I’d like to work on this.”

3. **Assignment confirmation**:  
   A Tech Lead will assign the issue to you. Do not start working on the issue until it is officially assigned to you.

4. **Development**:
   Link a development branch to the issue and keep all your work there. When done, create a pull request and add the President, Vice President and Tech Lead as the reviewers. Follow branch naming convention as mentioned in the next section

---

🏷️ **Branch Naming Convention**:

When working on an issue, create a new branch with the following naming scheme:

`<your-initials>/<component>/<short-description>`

Example: `uj/navbar/add-links`

---

🔄 **Creating Pull Requests (PR)**:

Once you’ve completed your work:

1. **Create a pull request**:  
   - Ensure that the PR is linked to the issue you worked on in the 'Development' section on the right.
   - Add appropriate labels.
   - Name your PR descriptively.

2. **Include detailed information**:  
   Your PR should include:
   - A clear and concise explanation of the changes made.
   - Bulleted points summarizing the work done.
   - Screenshots or videos demonstrating the changes (if applicable).

3. **Add yourself and reviewer**:  
   - Add yourself as the assignee of the PR.
   - Add your Tech Lead, Vice President, and President as the reviewers.

---

🔒 **Important PR Rules**:

1. **Workflows**:  
   - After creating your PR, notify in the respective issue thread.  
   - Once your PR is reviewed and approved, the changes will be merged into the staging branch.

2. **Closing the issue**:  
   When the PR is merged successfully, the Tech Lead will close the issue. You don’t need to close the issue yourself.

---

⚠️ **Additional Notes**:

- If you encounter any blockers or are unable to proceed with an issue, immediately notify the team in the issue thread or through direct communication with your Tech Lead.
- Always pull the latest changes from staging before starting any new work to avoid merge conflicts.
