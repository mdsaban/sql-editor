<template>
  <v-navigation-drawer
    mini-variant
    permanent
    app
  >
    <v-list dense>
      <v-list-item class="px-2 mb-4">
        <img src="/logo.jpeg" alt="atlan-logo" width="40px" height="40px" class="border-radius--16 mt-2">
      </v-list-item>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :ripple="false"
        :to="item.link"
        link
        active-class="active"
      >
        <v-tooltip right content-class="meeting-tooltip">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-icon class="ml-0 d-flex justify-center" v-bind="attrs" v-on="on" >
              <img :src="`/icons/${item.title}.svg`" width="20px" height="20px">
            </v-list-item-icon>
          </template>
          <span>{{item.title}}</span>
        </v-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'dashboard', link: '/?open=true' },
          { title: 'editor', link: '/editor'  },
          { title: 'analytics', link: '/analytics'  },
          { title: 'settings', link: '/settings'  },
        ],
      }
    },
  }
</script>
<style lang="scss">
.meeting-tooltip.menuable__content__active{
  font-size: 12px;
  font-weight: 500;
  padding: 2px 12px;
  background: #000000dc;
  color: #fff;
  text-transform: capitalize;
}
.v-list-item--active{
    img {
      filter: sepia(1) saturate(94) hue-rotate(256deg);
    }
  }
</style>
