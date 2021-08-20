# GL.iNet documentation

## Environment 

Build by [mkdocs](https://www.mkdocs.org/) 1.2.2, with theme [mkdocs-material](https://squidfunk.github.io/mkdocs-material/) 7.2.2

## Online View

Please view the docs online at https://docs.gl-inet.com/ 

## About plugin PhotoSwipe

Using the v4 version, v5 version looks better, but need to load js module. Don't know how to work it out in mkdocs.

Suggest to use PhotoSwipe when the width of image is large than 746px.

```
<div class="gl-lightbox" itemscope itemtype="http://schema.org/ImageGallery">
  <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
    <a href="https://static.gl-inet.com/docs/en/3/setup/Velica/hardware/hardware_1.jpg" itemprop="contentUrl" data-size="3167x2480">
      <img src="https://static.gl-inet.com/docs/en/3/setup/Velica/hardware/hardware_1.jpg" itemprop="thumbnail" alt="gl-b2200 pcb pinout" loading="lazy" />
    </a>
  </figure>
</div>
```

the loading attribute is for lazy loading.

Reference:

[https://photoswipe.com/documentation/getting-started.html](https://photoswipe.com/documentation/getting-started.html)

[https://codepen.io/dimsemenov/pen/ZYbPJM](https://codepen.io/dimsemenov/pen/ZYbPJM)
