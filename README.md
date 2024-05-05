Title : AltWorld

Discription : An UI to review candidate submissions for each assignment. Displaying the candidate
details and scores. Showing the detailed candidate profiles with individual assessment scores.

Website live link - https://alt-world-narendra-kajlas-projects.vercel.app/

# Technologies & Data

React + Vite - for frontend
TypeScript - as programming langauge inside react
Tailwind & Shadcn/ui - for styling the application
Lucide-react - for icons

Data - using dummy data stored in file - src/mockDB/mockCandidateData.json

localStorage - the browser's localStorage is used to store the list of shortlisted candidate emails.

# Setup Guide

To setup & run this app in local, clone the git repository : https://github.com/naren4488/altWorld.git

This app is create using vite-react, you can start the installation of project packages by command :
$ npm install

then run the project using command :
$ npm run dev

to check for any typescript errors run the command :
$ npm run type-check

to build :
$ npm run build

to preview after build :
$ npm run preview

# Folder strucutre

- package.json - contains all the details about scripts, dependencies & devDependencies
- public - contains assets of dummy data (images of candidates)
- src/components - contains all the components of project also it further contains /ui folder to carry the UI related components from shadCN UI library which are used in this project
- src/mockDB - contains the dummy data of candidates
- src/pages - contains the pages of project (here as there is only one page - Assignment Page it is having a single file inside it)
- src/main.tsx - starting file of project
- src.app.tsx - starting component of project

# Frontend UI Discription

The application contains a single page AssignmentPage which contains mainly Header, Footer, AssignmentDetailsCard, CandidateProfileCard components

Header - consist of path of page & page heading
Footer - consist of basic footer details

Main content - consists of 3 different sections

1. Sidebar - consist of dashboard button (not functional) & create new assignment card
2. AssignmentDetailsCard - to display assignment details & candidates who have done the assignment. Also here two tabs are implemented to show the candidates as per to-review state or shortlisted candidates state.
3. CandidateProfileCard - it is used to dislay the profile of candidates including their score and video submission. Also at bottom a shortlist button is implemented to shortlist a candidate or to remove him/her from shortlisted list. This shortlisted data is stored in localStorage for demonstration purpose. Here the shortlisted data refers to list of email of candidates who are shortlisted.

# Working of project

1. On app load, by default AssignmentPage will load with to-review tab selected for candidate list & first candidate is selected by default to detailed profile display.
2. On changing tab to shortlisted, the list of shortlisted candidates will be displayed if there are shortlisted candidates, if not then it will show an message that no any shortlisted candidates are there.
3. From candidate profile section, candidate's details can be read & decision can be made to shortlist or not. Also if already shortlisted, then also a reverse decision can be made to remove that candidate from shortlisted candidates.

# Note on responsive design

For now the UI is made only for laptop view, soon it will be updated to mobile view as well.
