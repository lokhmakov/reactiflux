# How to connect an iOS device to your computer via a SOCKS proxy

Say you're running a virtual machine on your work computer. Say this machine, for whatever reason, can only connect to the internet over NAT - as in, it does not get it's own IP address. Say this VM is running a webserver, and you need a device outside of your computer to connect to it.

If only there was a way to get your work computer to 'share' it's network, so that you could get at that VM… Here's how you do it!

_For all instructions, I assume your work computer is a mac_

1.  Get your computer's IP address:

    ifconfig

2.  Create a SOCKS proxy into your computer that allows for external traffic. First open up a terminal window, then run this command (replacing X's with your ip address or domain, and username with the user you usually SSH into your computer with):

        ssh -N -gv -D 1080 username@XXX.XXX.XXX.XXX

    If you do this correctly, you'll be asked to authenticate/login. Once logged in, you'll see a slew of text, at the end of which you'll see something like:

        debug1: Local connections to *:1080 forwarded to remote address socks:0
        debug1: Local forwarding listening on 0.0.0.0 port 1080.

    You now have a SOCKS proxy set up that can accept external traffic. Leave this running.

3.  Fire up your text editor, because we need to create a PAC (Proxy-auto-config) file so that the iPad can use this SOCKS proxy.
4.  Create a file with an extension of `.pac` (i.e. myProxy.pac)
5.  Paste the following into it, replacing X's with your work computer's IP, and Y's with the port you used for the SOCKS proxy (1080 in this example):

        function FindProxyForURL(url, host) {
        	return "SOCKS XXX.XXX.XXX.XXX:YYYY";
        }

6.  Save this file, and make it accessible to the iPad. An easy way to do this is to throw it up on dropbox, or other cloud storage your iPad has access to.

**On the iPad**

1. Open up **settings > wifi**.
2. Click on the **blue arrow** next to your wifi connection.
3. Scroll to the bottom where there is a section for **HTTP Proxy**.
4. Select **Auto** from this section.
5. In the URL field, key in the URL of the \*.pac file you created and made web-accessible.

Voila, your iOS device should now have the network characteristics of your work computer, and all traffic from the iOS device should go through it. You can verify this by watching the SOCKS proxy running in your terminal. When you try to access a website on the iPad, you should see a connection being made in the SOCKS proxy terminal window.

### bibliography

- http://snipplr.com/view/16563/
- https://gist.githubusercontent.com/austinhappel/5614113/raw/b404e144fe277b42e9cb53979208ea87c43a59a7/how-to-connect-an-iOS-device-to-your-computer-using-SOCKS.md
