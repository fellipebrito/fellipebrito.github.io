---
layout: default
---

<!-- Section for English posts -->
<h2 class="posts-header">Posts em Português</h2>
<div class="bento-container">
  {% for post in site.posts %}
    {% if post.lang == 'pt' %}
      <a class="bento-item-link" href="{{ post.url | relative_url }}">
        <div class="bento-item">
          {% if post.image %}
            <div class="post-image" style="background-image: url('/assets/images/posts/{{ post.image }}');"></div>
          {% endif %}
          <div class="title-overlay">
            {{ post.title | escape }}
          </div>
        </div>
      </a>
    {% endif %}
  {% endfor %}
</div>