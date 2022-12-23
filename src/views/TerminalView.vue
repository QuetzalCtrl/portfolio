<template>
  <div>
    <div class="terminal">
      <div class="terminal-header">
        <div class="terminal-header-left">
          <span class="terminal-header-icon">&#x1f5a5;</span>
          <span class="terminal-header-title">Connected as: Hugo Vanrobaeys</span>
        </div>
        <div class="terminal-header-right">
          <router-link to="/"><button class="terminal-header-button" title="Close">&#x2715;</button></router-link>
        </div>
      </div>
      <div class="terminal-body">
        <pre class="terminal-output">
<strong>hugo@portfolio:~$</strong> Welcome to my portfolio!

Here you can interact with this Command Prompt using specific commands in order to get informations about me. For example, <span class="cmd-typo">whoami</span> will display basics informations, such as my name and my age.

If you want to pursue your experience with this interface, feel free to discover! Oh, and don't hesitate to use the <span class="cmd-typo">help</span> command, as it will display a list of useful commands you may need to know about.

However, if you don't feel confortable with the whole command line approach, or just get bored of it; you can any time close it either by typing <span class="cmd-typo">exit</span> or simply clicking the close button (upper right corner). You'll then land on the home page of my portfolio, this time with a more "standard portfolio website" design, let's say.

Enjoy :)

  - Hugo Vanrobaeys, a computer student among others

</pre>
    
        <kbd class="console-input">
          <span class="message-input">
            <label for="message"><strong>hugo@portfolio:~$</strong></label>
            <input class="message" id="message" type="text" autofocus>
          </span>
      </kbd>
      </div>
    </div>
  </div>
</template>

<style>
.console-input span {
    width: 100%;
    display: inline-block;
  }
  .console-input span label {
    width: 150px;
    margin-right: 9px;
  }
  .console-input span input {
      background: transparent;
      border: none;
      color: #fff;
      cursor: default;
      font-family: monospace;
      font-size: 16px;
      width: calc(100% - 160px);
      /* min-width: 50%; */
      padding: 0;
  }
  .console-input span input:focus {
      border: none;
      outline: none;
  }
  .cmd-typo{
    background-color: #4a4d53;
    border-radius: 5px;
    padding: 1px 4px 1px 4px;
  }
  .terminal {
    overflow: scroll;
    position: relative;
    height: 800px;
    max-height: 90vh;
    width: 1200px;
    max-width: 90vw;
    margin: 0 auto;
    top: 5vh;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    background-color: #1b2134;
    color: #fff;
    font-family: monospace;
    font-size: 14px;
  }
  .terminal-header {
    display: flex;
    align-items: center;
    background-color: #283140;
    color: #fff;
    padding: 0.5em 1em;
  }
  .terminal-header-left {
    flex: 1;
  }
  .terminal-header-icon {
    font-size: 1.5em;
    margin-right: 0.5em;
  }
  .terminal-header-title {
    font-size: 1.25em;
    font-weight: bold;
  }
  .terminal-header-right {
    display: flex;
  }
  .terminal-header-button {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    margin-left: 0.5em;
    outline: none;
  }
  .terminal-header-button:hover {
    color: #ccc;
  }
  .terminal-body {
    padding: 1em;
  }
  .terminal-output {
    white-space: pre-wrap;
  }
</style>
