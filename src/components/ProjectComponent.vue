<template>
    <div>test projet numéro {{ $route.params.projectId }}</div>
    <div id="gist"></div>
    
</template>

<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
export default {
  name: 'Gist-Example',
  mounted: function () {
    postscribe('#gist', `<script src="https://tryhackme.com/badge/185553"><\/script>`)
  },
}
</script>