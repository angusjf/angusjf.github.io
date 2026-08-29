---
{
  "title": "AI coding harness in 100 lines",
  "img_url": "/images/sfch.png",
  "img_alt": "The agent running in the terminal",
  "date": "2026-08-29",
  "seo_description": "Writing an AI coding agent but keeping it as simple as possible",
  "summary": "It's easier you think!",
  "tags": [ "ai" ],
  "hidden": false
}
---

# AI coding harness in 100 lines

Here's an AI/agentic coding harness I wrote that's ~ 100 lines of code: [sfch](https://github.com/angusjf/sfch).

It's easy to forget how simple they are to build - just before I wrote this I was served a YouTube AD for codex... which is a tool you can build in like 5 mins.

_(I was kind hoping this is what [pi.dev](http://pi.dev) would be - but that's kinda "simple" but still tens of thousands of lines of code.)_

The process is straightforward:
 - get an API token for a hosted LLM service or host your own (I used fireworks.ai and GLM 5.3)
 - the outer loop waits for messages and sends them to the model (I use `node:readline`'s `prompt()`)
 - the inner loop keeps going until that LLM returns `STOP`
 - you print everything inbetween (messages, tool calls, reasoning if you like, tool responses)

So that's an LLM chatbot... so then to let it code:
 - give it 1 tool called `bash(command: string)` and run whatever commands it gives you

The thing that makes it so easy is that llms are naturally append-only, so a terminal app is a super natural fit (way more than e.g. a text editor). You don't even have to implement a `/quit` command, you can just hit CTRL-D for end of file.

If you want to make it resumable, a nice idea is just appending / loading messages from a jsonl file at every step. Generate a random ID for the filename at the beginning (or allow passing one in) and then at the end print it out.

There's a few things that stand in your way if you wanna make something as complex as pi:
 - if you have a company subscription to openAI then you can't just turn that into an API key, you have to implement some kind of oauth flow - yuck
 - `readline` gets old quick - if you wanna implement a nicer UX for prompting you're gonna have to start writing 1000+ lines of code :/

The magic kicks in when you set the agent on improving the agent! You can get it to make a `/reload` command or even a `reload()` tool ... then when you ask for a change... it can just build it! Feels like sci-fi.
