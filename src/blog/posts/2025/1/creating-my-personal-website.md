---
title: Creating My Personal Website
date: 2025-01-22
categories: ['tech']
---

# Creating My Personal Website

## Journey to the Rewrite

Back in 2023, my wife was talking with a few higher-ups at work and was looking at a potential transfer opportunity to another office on the other side of the country. Of course, we didn't know at the time just how low the offered salary was going to be despite the destination's similar cost of living, so we were (cautiously) excited at the prospect. While she was waiting for the official offer letter to come in (and hence our decision to be made), I started up my job hunt so I'd be prepared for my career shakeup.

After I fixed up my resume, I knew I needed to make a personal site if for no other reason than to say, "Hey, I do in fact know how to create websites." So, I cracked my knuckles and got to work. I had dabbled with a few different frameworks at the time, but my main experience was in React. Make no mistake: I knew at the time just as well as I know now that React is a terrible-no-good-awful-thing to use to create a personal website (barring, perhaps, the use of a static website generator). Still, it was what I knew and I wanted something fast, so React it was.

The mission was a success and I created what I thought was a pretty good looking personal site. I was happy with the end result but knew one day I'd rewrite it in something a little more... appropriate for the use case. Fast forward to January 2025, and for surely no reason at all (just absolutely no reason [like not at all related to any current events]) I was thinking that maybe, just maybe, taking a little bit more control of my online persona would be a healthy thing to do for myself. So I dusted off my old Github repo and started rewriting my website in 11ty, a static site framework I had recently discovered.

## Eleventy

If you've heard of 11ty before, you may be unsurprised to hear that I was quite happy with the framework. I view 11ty as a really elegant solution to the age-old problem of maintainability in HTML website development. The reason a lot of people move toward technologies like React is (among other reasons) that it meshes relatively nicely with developer expectations of DRY and maintainable code (despite all of its sharp corners and "oddities," as it were). Maybe that's a controversial take, but I really think that to many people React just "makes sense," at least on the surface level. By the time you hit all the crazy stuff, you're either in deep enough to suck it up and learn it or you're already done doing what you need to do and can move on.

So all that said, I think 11ty brings with it a lot of those DRY and maintainability benefits that raw HTML+CSS has been missing. It has layout templates, build-time data transformations, a high degree of templating language support, and flexibility in site architecture. On top of all that power, it's relatively easy to learn (though I think the docs might need a bit of work), and at the end of it all YOU GET A NO-JS WEBSITE BY DEFAULT. Wooh!

And like any good developer, I used a plethora of different resources in the development of this website. In fact, I used so many really nice resources that the main goal of this blog post is to collect all the links into one spot for a big Thank You before I finally close all those tabs.

So here are some of the problems I ran into and the resources I used to figure them out.

## Helpful Resources

### Responsive Navbar

Outside of my planned content, I had two big goals for this website:

1. Be responsive (and accessible)
2. Be JavaScript-free

Number two was nogotiable if it needed to be, but I still really wanted to accomplish it. Unfortunately, a lot of responsive navbar tutorials seemingly used JavaScript in their design. I didn't love that, and I knew there was a better way. So I dug a bit more and I found the article [Responsive Navbar without JavaScript](https://dev.to/shubhamtiwari909/responsive-navbar-without-javascript-3p7o) by Shubham Tiwari.

In principle, this approach relies on a checkbox input that's redesigned to look like a button. The stylesheet then uses the `input[type="checkbox"]:checked` selector to conditionally apply styles based on whether the checkbox is checked or not. Before I found this guide, I knew that the no-JS solution was going to involve interesting CSS selectors, but I didn't consider the idea of using a literal input checkbox. And it makes sense in retrospect: the fundamental issue here is how you're going to store the open/close state and reference it in the styling, and HTML's main way of storing state is in inputs.

### Hiding Content Without Compromising Accessibility

Accessibility is a tricky topic because it's easy to get caught up in your vision and create something that prevents some people from consuming your internet content. Fortunately, the web is largely accessible by default: a basic HTML webpage with headings and subheadings and hyperlinks is virtually always compatible with everyone on the planet. But once we start doing fancy stuff to make it look better for sighted people, we start to screw things up.

Sometimes, though, we want to hide things visually on our webpage without nuking accessibility. I've heard in the past that the `display: none` style is often a bad way to do this, since it makes the element invisible to screen readers. So when I saw that the Responsive Navbar tutorial above used `appearance: none` to hide the checkbox's default styling, I started getting suspicious. To be clear, I don't actually know if `appearance: none` is a problem for this use case. But I also don't have an effective way of testing whether it messes with screen readers. Some cursory research reveals [a 2022 article by Clara O'Keeffe](https://uit.stanford.edu/blog/impacts-css-accessibility) which states that `appearance: none` can break things in a specific case. Is this still a problem? No idea. But I can only try my best.

Also, for whatever reason when I did use `accessibility: none` I ended up with a weird spacing problem. This is almost certainly an easy fix, but with my prior concerns I just went forward anyway.

So I took the time to google around for a different way to hide the element without removing it from the accessibility tree, and I found this [a11yproject article](https://www.a11yproject.com/posts/how-to-hide-content/) that gives a useful CSS class called `.visually-hidden` that hides an element from view without obstructing screen readers (or so they say). In a good faith attempt to maintaining accessibility, I used this to hide the checkbox in the navbar. All good! I hope!

### User-Agent Focus Styling

Another problem I ran into with the responsive navbar is that I was using a `<label>` element around the checkbox and simply styling it to _look_ like a button. Well, that wasn't fundamentally an issue; rather, the problem with this approach was the focus.

The HTML label element, when focused, passes its focus to the form control it describes. However, the form control in question was hidden from view. This means that when you tabbed to the checkbox using a keyboard, you couldn't see the focus outline. In principle this is easy to hack: you can just throw an `outline: 1px solid blue` or something and call it a day. However, this style is not the browser/OS default, so it would clash with the rest of the elements on most or all systems.

As they've done many times before, CSS-Tricks comes to the rescue with [an article explaining how to fix this correctly](https://css-tricks.com/copy-the-browsers-native-focus-styles/). The solution was simple: just use the `Highlight` (or `-webkit-focus-ring-color`) keyword to grab the browser's default outline styling. Fixed!

### Creating the Blog

Once I had the basic website laid out with a couple pages (the home page and the board game shelf), I knew I wanted to create a personal blog for occasional storage of my thoughts. I also knew that the 11ty docs were less than optimal when it comes to applying the framework's concepts to real use cases. Don't get me wrong, the docs do have a lot of useful information, but there are some missing concepts. Or at least those concepts are scattered around in a way that isn't super accessible to someone who doesn't know 11ty very well.

Fortunately, the internet is a marvelous repository of guides and tutorials. I searched around and I found this [Eleventy Blog Guide](https://cfjedimaster.github.io/eleventy-blog-guide/guide.html) by cfjedimaster. I think this article is a really well written demonstration of 11ty's power as a framework. Cfjedimaster gets straight to the point and puts the important stuff first: architecture and configuration. The styling and fluff is relegated to the end of the page (great for someone like me who already has their styling figured out), and peppered throughout the guide are explanations and verification steps for making sure the code works as intended.

All around, a fantastic resource.

## What Next?

Now, I have a no-JS personal website I can be proud of, the start of a cool board game documentation page, and a functioning blog that I can add to whenever I want. What next?

In truth, everything I have so far constitutes pretty much all the difficult setup and configuration I will need to do for a while. I do have future plans, but they're largely content based.

### Recipes Page

To start with, I want to create a page where I can store recipes I find online. Currently, I have some old inactive tabs on my phone's browser(s) that have nice recipes waiting to be found again. I like to keep a clean browser as much as possible, so I don't like this. Instead, I want a single page on this site where I can put links to recipes I find so I can easily reference them from any device.

Fortunately, this is a really easy thing to do! I just need to go collect my disaparate recipes and write up the initial post.

Next is the big one. Politics alert!

### Politics >.>

It's no secret that we have a really crappy administration starting this year. In fact, as of this writing, that crappy administration has already started. And I can confidently tell you that it wasted no time being crappy.

What I want to do is keep a running catalog of all the evil, nasty things this president and his cronies do to the American people through executive action, legislation, and policy. That's a really tall order, but I think it will be a genuinely useful thing to have on hand when discussing politics with some of my family.

My political beliefs are based in a variety of facts and trends sourced from a variety of places over a long period of time. When I express the opinion that, say, the muskrat is a terrible no-good man, I'm not doing that just because I disagree with some of his nuanced political ideals. Instead, that take is built on my holistic understanding of his labor rights violations, his disregard for consumer data protection, as well as his antisemitism and fascist tendencies, among other things.

This is a difficult thing to express in the middle of a conversation. I sometimes get caught off guard or flustered when someone waxes poetic about how, for example, the aforementioned rodent has really mad bizness skillz. This is because with everything I understand to be true about that man, I can't wrap my head around why this person in my life, whom I presumably respect, would unironically _like_ him. Internet trolls and grifters are one thing, but a family member or friend? So I end up getting caught up in that and fail to adequately explain _why_ he's not a good role model.

This web page will hopefully be a place I can point to and say, "See? Here's a bulleted list of terrible things he's done!" without having to go research crap for 2 hours during a family visit. And indeed, I hope it will be a place others can point as well.

But we'll see. Like I said, it's a tall order to catalog so much reprehensibility in one place. Either way, I don't expect I'll expose that page via hyperlinks from the main part of my website. Instead I'll likely opt to keep it public and hosted but in a link-only sort of way.

## End

If you've made it this far... wow. I am _not_ a concise person, and I did not write this with the intent of editing it much. This page is likely of an ungodly length and of virtually no use to anyone. In fact, I don't expect that anyone will ever read this. I wrote it for _me_.

But maybe you saw the value in a human putting their thoughts into a communicable form and wanted to engage with it. So for that, I thank you.

My parting advice: if you haven't already, go create something. Be it through art, music, writing, or technology, the human spirit of creation is one of the few things that can never truly be taken from us. Express that right as much as you can.
