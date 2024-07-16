<template>
  <div class="flex items-center p-4">
    <!-- Mobile Sidebar -->
    <MobileSidebar />
    <div class="flex justify-end w-full">
      <DropdownMenu>
        <DropdownMenuTrigger as-child
          ><Button variant="outline"> <Icon name="lucide:user-circle" /></Button
        ></DropdownMenuTrigger>
        <DropdownMenuContent class="w-64">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div class="flex px-2 gap-x-2">
            <Avatar>
              <AvatarImage
                v-if="user?.user_metadata.avatar_url"
                :src="user.user_metadata.avatar_url"
              >
                <AvatarFallback>
                  {{ user.email?.charAt(0).toUpperCase() }}
                  {{ user.email?.charAt(1).toUpperCase() }}
                </AvatarFallback>
              </AvatarImage>
            </Avatar>
            <div>
              <div class="font-bold">{{ user?.user_metadata.full_name }}</div>
              <div class="text-sm">{{ user.email }}</div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="logout">
            <Icon
              class="w-4 h-4 mr-2"
              name="heroicons:arrow-left-on-rectangle"
            /><span>Logout</span>
          </DropdownMenuItem>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const supabaseClient = useSupabaseClient();

const logout = async () => {
  await supabaseClient.auth.signOut();
  navigateTo("/auth");
};
</script>

<style lang="scss" scoped></style>
