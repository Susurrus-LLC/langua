## There’s a problem with your pull request

Hey @{{pullRequestAuthor}},

Thanks for your contribution. There seems to be an issue with your pull request. Please read the following log in order to understand what the problem is. Please fix the problem and commit the changes.

{{#jobs}}

### {{displayName}}

<a href="{{link}}">View build log</a>

{{#scripts}}

<details>
  <summary>
    <strong>
     {{command}}
    </strong>
  </summary>
```
{{&contents}}
```
</details>
{{/scripts}}
{{/jobs}}

**TravisBuddy Request Identifier: {{requestId}}**
