# contact

The contact form posts to Web3Forms, which emails each submission to the inbox the access key belongs to.

- The key goes in the hidden `access_key` input in `index.html` (it is safe to be public). Get one free at web3forms.com.
- While it still says `YOUR_WEB3FORMS_ACCESS_KEY`, the form shows a message telling people to email contact@neuvara.org instead.
- Topics in the dropdown: Cross-scanner audit, Multi-site data preparation, Rankings submission, Something else. Links like `/contact/?topic=audit` preselect one (mapping in `js/main.js`).
- If the form collects anything new, update the privacy policy too.
