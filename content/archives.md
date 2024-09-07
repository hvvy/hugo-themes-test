---
title: "Archives"
date: 2024-09-07T00:00:00Z
layout: "archives"
---

# Archives

{{- $pages := .Site.Pages -}}
{{- $sorted := $pages | where "Type" "post" | sort "Date" -}}

{{ range $sorted }}
  {{ with .Date }}
    <h2>{{ .Format "January 2006" }}</h2>
    <ul>
      {{ range where $sorted "Date" ">" . }}
        <li><a href="{{ .Permalink }}">{{ .Title }}</a></li>
      {{ end }}
    </ul>
  {{ end }}
{{ end }}

