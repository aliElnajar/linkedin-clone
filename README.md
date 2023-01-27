##  welcome , lets talk about the project
> simply it's a clone of linkedin , users able to create an account and post and it'll be on the timeline, and they can edit or delete any of their own posts

--- 
### what i used in this app?
1. firebase 
a- firestore: working as database for the app and will be updated with any changes on both
(via realtime), user have ability to edit or delete their own posts 
b-  authentication: users can login or create new account they can add any profile picture as well , each user have unique id will be used to recognize their own posts to give them access to edit or delete any of it, user data will be stored in cache and observed by onauthstate , it'll save the data of the users and once they signout the cache will be cleared and will navigate them to signup/login page
2. react-router: used to navigate between home page and signup/signin page and if there's user data saved in the cache they won't be able to get to the home page
3. mui: used for styling app components
- as well ive used react context api for state management ,
it's divided to 2 files one for authentication management and the other for handling posts