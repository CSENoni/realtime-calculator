# realtime-calculator

This realtime calculator app allows multiple users enter and see real time calculation from other users. There are few things about the apps:

- The new user comes in won't see other calculations that were made from other users without his/her presence(new user only see things performed when they are online) unless they are from the same browser.
- Users can only do basic calculations (no sin, cos, graph, ...)
- The result(s) will show at the end of the screen (Max is 10). Newer result will replace the oldest result. Newest result comes to the top.
- Because of the pernament session, user could still see their calculations after logging off (if they use the same session).

https://gentle-beyond-22681.herokuapp.com/

# Stacks
For this challenge, I used NodeJS, ExpressJS for back-end and HTML, CSS, and vanilla Javascript for front-end. I think it is more interesting using vanilla Javascript for this challenge since it pushed me to do more works.

# Approach and Challenges:
I kinda finished early the challenge until later realized I missed one important requirement. One of the challenges of this challenge is that it requires the results remain between sessions. At the beginning, I misunderstood the words since I thought it was only available on one session, but it was supposed to stay longer than that. The simple solution without using database and other authentication or user account setup is to use localStorage. For real time communication, it looked like the chat application so socket.io is a good package for this requirement. The other requirements are simple to implement like calculator, result threshold, and operations.

Things could be better done:
- The code could be optimized for better performance even though it may not make a big difference because this is a small application. Since the instructed time-frame spent on this assignment is limited, I believe it could be improved further.
- Because of using localStorage, other user using different browser or machine cannot see all the results if they are online later. 
- May have tried to read and follow requirements more carefully instead of focusing on beating the instructed time-framed, the work would be more effecient.
