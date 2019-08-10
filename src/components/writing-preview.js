  <section class="measure-wide mh3 mb6">
    <h2 class="ma0">
      <a title={ site.siteMetadata.writingDesc }
        class="db link f4 bb pv3 dark-gray hide-move-child flex items-center"
        href="{{ 'writing' | absolute_url }}">
        Writing
        <Icon type="arrow-right" class="child ml1" />
      </a>
    </h2>

    {% for post in site.posts limit:4 %}
      <a class="db f4 link dark-gray pv3 bb dim"
        href="{{ post.url | absolute_url }}"
        title="{{ post.title }}">
        {{ post.title }}
      </a>
    {% endfor %}

  </section>

  <section class="mb6">
    <h2 class="ma0 mh3">
      <a title={ site.siteMetadata.writingDesc }
        class="db link f4 pv3 dark-gray hide-move-child flex items-center"
        href="{{ 'projects' | absolute_url }}">
        Projects
        <Icon type="arrow-right" class="child ml1" />
      </a>
    </h2>

    <div class="overflow-x-scroll momentum-scroll mh3 nowrap">
      {% for project in site.data.projects limit: 8 %}
        {% include about/card.html
          img=project.img
          title=project.name
          link=project.link
          class='mr4'
          %}
      {% endfor %}
      {% include about/more.html
        link='projects'
        %}
    </div>
  </section>

  <section class="mb6">
    <h2 class="ma0 mh3">
      <a title={ site.siteMetadata.writingDesc }
        class="db link f4 pv3 dark-gray hide-move-child flex items-center"
        href="{{ 'experiments' | absolute_url }}">
        Experiments
        <Icon type="arrow-right" class="child ml1" />
      </a>
    </h2>

    <div class="overflow-x-scroll momentum-scroll mh3 nowrap">
      {% assign featuredExperiments = site.data.experiments | where: 'featured', true %}
      {% for experiment in featuredExperiments limit: 8 %}
        {% include about/card.html
          img=experiment.img
          title=experiment.name
          link=experiment.link
          class='mr4'
          %}
      {% endfor %}
      {% include about/more.html
        link='experiments'
        %}
    </div>
  </section>

  <section class="measure-wide mh3 mb5 mb0-ns">
    <h2 class="ma0 db f4 bb pv3 dark-gray hide-move-child flex items-center">
      Talks
    </h2>

    {% for talk in site.data.talks %}
      <a class="db f4 link dark-gray pv3 bb dim flex items-baseline"
        href="{{ talk.link }}"
        title="{{ talk.title }}">
        {{ talk.title }}
        <span class="flex-auto"></span>
        <small class="gray ml1" style="font-size: 0.75rem">{{ talk.conference }}</small>
      </a>
    {% endfor %}
  </section>
