---
title: Github ssh key
layout: single
sidebar:
  nav: "resources"
toc: true
toc_sticky: true
---

Using Github with ssh keys is preferred, as it's much easier to use. Here is how to set it up:

### 1. Create an ssh key

Run

    ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/github_id_rsa

The email address is for your convenience, it doesn't really matter what you put there; you can even use this to state the name of the computer that will use that key.

You can use a passphrase - but even without it's sufficiently safe, because only you have the secret key file! But please enabling [Two Factor Authentication](https://help.github.com/articles/about-two-factor-authentication/)!

### 2. Add the key to Github

Log in to [https://github.com](https://github.com). In the top right corner, in a drop-down menu, click "Settings". Select "SSH and GPG keys" from the menu on the left. Click "New SSH key", add something as a title and copy the output of

    cat ~/.ssh/github_id_rsa.pub

into the "Key" text box.


### 3. Guide ssh to your key

Edit (or create) `~/.ssh/config` and enter the following lines:

    Host github.com
       User git
       PreferredAuthentications publickey
       IdentityFile ~/.ssh/github_id_rsa

### 4. Check

    ssh -T git@github.com

should print

    Hi UserName! You've successfully authenticated, but GitHub does not provide shell access.



### References

   * [Create an ssh key](https://help.github.com/articles/connecting-to-github-with-ssh/)
   * [Add the key to Github](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account)
   * [Check](https://help.github.com/articles/testing-your-ssh-connection/)