# GL.iNet documentation

This repository is the source code for documentation of GL.iNet routers firmware 3.x

## Environment 

Build by [mkdocs](https://www.mkdocs.org/) 1.2.2, with theme [mkdocs-material](https://squidfunk.github.io/mkdocs-material/) 7.2.2

Using [python 3.x virtual environment](https://docs.python.org/3/tutorial/venv.html), create a virtual environment, activate it, git clone this project source code inside it. There is a **requirements.txt** file in the project, run the command below to install packages.

`pip install -r requirements.txt`

## Online View

Please view the docs online at https://docs.gl-inet.com/en/3/ 

## Guide

### Markdown syntax

Each page use markdown, please check out this basic syntax of markdown [here](https://www.markdownguide.org/basic-syntax/).

### Open in new tab

If you wanna a link to open in new tab, add `{target="_blank"}` at the end of link block.

### Image file type

Prefer to use png.

### Image lightbox

If the size of image is too big, please use the PhotoSwipe, check out [here](#about-plugin-photoswipe).

### Image captions

```html
<figure>
  <img src="https://dummyimage.com/600x400/eee/aaa" width="300" />
  <figcaption>Image caption</figcaption>
</figure>
```

### Use relative path to link internal content

```
[Repeater](../../../tutorials/repeater)
```

## About plugin PhotoSwipe

Using the v4 version, v5 version looks better, but need to load js module. Don't know how to work it out in mkdocs.

Suggest to use PhotoSwipe when the width of image is large than 1021px.

```
<div class="gl-lightbox" itemscope itemtype="http://schema.org/ImageGallery">
  <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
    <a href="https://static.gl-inet.com/docs/en/3/setup/gl-b2200/hardware/hardware_1.jpg" itemprop="contentUrl" data-size="3167x2480">
      <img src="https://static.gl-inet.com/docs/en/3/setup/gl-b2200/hardware/hardware_1.jpg" itemprop="thumbnail" alt="gl-b2200 pcb pinout" />
    </a>
  </figure>
</div>
```

Reference:

[https://photoswipe.com/documentation/getting-started.html](https://photoswipe.com/documentation/getting-started.html)

[https://codepen.io/dimsemenov/pen/ZYbPJM](https://codepen.io/dimsemenov/pen/ZYbPJM)

## About versoning

There is a plugin named `mike` is for versoning, it need to deploy with Github Page, but I don't use Github Page, I just copy the file structure like `mike` does. Please check out [mkdocs-material-example-versioning](https://github.com/squidfunk/mkdocs-material-example-versioning), and switch to `gh-pages` branch.

Reference:

[Setting up versioning](https://squidfunk.github.io/mkdocs-material/setup/setting-up-versioning/)

[https://squidfunk.github.io/mkdocs-material-example-versioning/](https://squidfunk.github.io/mkdocs-material-example-versioning/)
