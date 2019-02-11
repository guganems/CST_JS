Read the task description and comments in sample code carefully. 
Every comment of code has its meaning.

You do not have to write any CSS. Every necessary CSS is already written in style.css or you can use bootstrap classes.

Use the following fonts from font awesome:
https://fontawesome.com/v4.7.0/icon/phone-square
https://fontawesome.com/v4.7.0/icon/envelope-square
https://fontawesome.com/v4.7.0/icon/globe
https://fontawesome.com/v4.7.0/icon/ellipsis-v

___

###5 Points

1.1.  Make ajax call on this URL https://jsonplaceholder.typicode.com/users and save users in a variable.

1.2. Draw users like it is shown on image #1. User bootstrap cards to display users.
Use the following URL for images: https://randomuser.me/photos. 
The actual URL for each user will be https://randomuser.me/api/portraits/women/{USER_ID}.jpg or https://randomuser.me/api/portraits/men/{USER_ID}.jpg.
As far as the data does not have information about user gender, you can use all men or all women avatars.

___

###5 Points

2.1. Add “Last updated xx“ label like it is displayed on image #2

2.2. Add Update and Delete buttons. See image #3.

___

###5 Points

3.1. Add button “New User”  as it is shown on image #4.

3.2. On “New User” button and “Update” button click dialog must be displayed. You can find the dialog in index.html with ID userDialog.

___


###5 Points

4.1.When ”New User” button is clicked the modal title should display “Add new user”, but when “Update” is clicked modal title should display: Update User: "Name Surname". See image #5.

4.2 When “Delete” button is clicked user should be deleted and the respective card should disappear.

---


###10 Points

5.1.  On Update button click user data must be populated. See image #5.

5.2. When you choose file in form it must display selected image in img tag with ID uploadPreview.

5.3. When you fill the form and click save button the user must be added at the end of the list or updated, depending whether it is new user or not.

5.4. Add regexp validation before data is updated.
Username must be at least 4 characters and at most 15 characters, containing only alphanumeric symbols and dot.
Website must be valid website address starting with http://. 
Email must be valid email address.

5.5. If save button is clicked and data is invalid input must become red. And error messages must be displayed. See link: https://getbootstrap.com/docs/4.2/components/forms/#server-side





