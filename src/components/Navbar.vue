<template>
  <nav>
    <v-toolbar flat>
      <v-container>
        <v-row>
          <img
            src="@/assets/nike-logo.png"
            alt="logo"
            width="64px"
            height="64px"
          />

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn text>New releases</v-btn>
            <v-btn text>Men</v-btn>
            <v-btn text>Kids</v-btn>
            <v-btn text>variety</v-btn>
          </v-toolbar-items>

          <v-spacer></v-spacer>

          <template class="icons" v-if="$vuetify.breakpoint.mdAndUp">
            <v-btn icon class="icon">
              <v-icon>mdi-shopping</v-icon>
            </v-btn>
            <v-btn icon class="icon">
              <v-icon>mdi-search-web</v-icon>
            </v-btn>
          </template>
        </v-row>
      </v-container>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
};
</script>
