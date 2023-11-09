---
layout: default
---

<!-- Section for English posts -->
<h2 class="text-xl font-bold my-5">Posts in English</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {% for post in site.posts %}
    {% if post.lang == 'en' %}
      <a href="{{ post.url | relative_url }}" class="block overflow-hidden rounded-lg shadow-lg">
        <div class="relative">
          {% if post.image %}
            <img class="w-full h-48 object-cover" src="/assets/images/posts/{{ post.image }}" alt="{{ post.title | escape }}">
          {% endif %}
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <p class="text-white text-lg">{{ post.title | escape }}</p>
          </div>
        </div>
      </a>
    {% endif %}
  {% endfor %}
</div>

<!-- Section for Portuguese posts -->
<h2 class="text-xl font-bold my-5">Posts em Português</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {% for post in site.posts %}
    {% if post.lang == 'pt' %}
      <a href="{{ post.url | relative_url }}" class="block overflow-hidden rounded-lg shadow-lg">
        <div class="relative">
          {% if post.image %}
            <img class="w-full h-48 object-cover" src="/assets/images/posts/{{ post.image }}" alt="{{ post.title | escape }}">
          {% endif %}
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <p class="text-white text-lg">{{ post.title | escape }}</p>
          </div>
        </div>
      </a>
    {% endif %}
  {% endfor %}
</div>
