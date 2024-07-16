<template>
  <div class="flex items-center w-full min-h-screen">
    <div class="w-full max-w-4xl mx-auto">
      <Card>
        <CardTitle><div class="py-4 text-center">Welcome</div></CardTitle>
      </Card>
      <CardContent>
        <Auth
          :supabaseClient="supabaseClient"
          :appearance="{
            theme: ThemeSupa,
          }"
          :providers="['github', 'google']"
          redirectTo="/"
        />
      </CardContent>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@nuxtbase/auth-ui-vue";

const supabaseClient = useSupabaseClient();

definePageMeta({
  layout: "home",
});
</script>
