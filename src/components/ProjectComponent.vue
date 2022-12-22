<template>
    <div>test projet numéro {{ $route.params.projectId }}</div>
    <div id="gist"></div>
</template>

<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
export default {
  name: 'ProjectComponent',
mounted: function () {
    // https://platform.linkedin.com/badges/js/profile.js
    postscribe('#gist', `<script src="https://tryhackme.com/badge/185553"><\/script>`)
  },
}
</script>