# Ticket-Center

![N|Solid](https://furnesstradition.org.uk/wp-content/uploads/2015/03/ticket.jpg)

# Project description

Ticket center is a website which allows users to view, search for and buy tickets for music concerts.The app is built with React as front-end and kinvey for backend.
 The app functionality is split in 3 parts:
    -Authenticated view
    -Unauthenticated view
    -Admin view

### Common views

All users have access to Home, Details, Login and Register views.

-Home -This view shows lists all events from database.Each event shows basic info about concert venue:image, band name, genre and proggress bar which shows percentage of tickets sold.Clicking on Event reveals more information on Details page.

-Details -The view reveals more information about event such as timer which shows time remaining till the start of the event, embedded youtube link, date of venue and band description.Unauthenticated users cant buy tickets.

- Register form -Accessable trough Profile tab.Shows form for user registration .It consists of : username (non empty string), password (string of minimum 5 characters)
 and repeatedPassword.

-Login form -Accessable trough Profile tab.Users must suply username and password.

### Authenticated view

Authenticated users can buy tickets from Details page and have access to 3 more views:Purchase history,Favourite genres, Genres.

-Purchase history-Shows all user ticket purchases and option to refund purchase.

-Genres -Allows users to subscribe to specific genres.

-Favourite genres-Based on which genres user is subscribed to he gets events only from those genres.

### Admin view

Admins have access to: Create,Edit and Delete pages.
-Create - Shows form which admin can fill and create new event.All fields are required.

-Edit and Delete pages accessable from Home view.Admins can edit existing events or delete them.

##### Admin login:
username:admin
password:admin