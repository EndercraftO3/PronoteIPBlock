# PronoteIPblock
Yeah, I made this to block our own IP address. It's pretty fun to see people's reactions I guess.

### Important
This doesn't prevent everyone from accessing Pronote, only those with the same IP address as you which in the case of computers where you study is everyone because the IP address is the same for everyone.

# How to use

I didn't make the interface that clean visually because that wasn't really the goal, which is to make it functional, but it should be easy to understand.

If you're not using CORS enabled mode, then automated mode will open a new window for you to run code in, otherwise it won't work because of CORS.

If you have enabled CORS mode (for example, you've used a CORS-enabling extension), then the code will run locally and you'll need to press the stop automated mode button to stop it - it's not instantaneous, so you should wait at most 30 seconds before you're sure the code has exited.

The CORS toggle is on the right.

The Pronote logo can also be used to check the banned state when you click on it (CORS only). It will automatically check until an error occurs. If coloured, you are not banned. If grey, you are banned. If yellowish, then an error has occurred.

The 250 request number is what I find the most reliable while being small, if it doesn't work for you try increasing the number to like 500 by changing the `requestNumber` variable using console.


# Password
When you load the page, a password dialog appears. This isn't for security, but to prevent inexperienced users from discovering and using the method, so it doesn't spread.

Hope you enjoy it (just don't do it openly in front of everyone!), it can be used to make people laugh or get a bit angry.
