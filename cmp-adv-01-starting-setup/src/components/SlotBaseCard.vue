<template>
    <div>
        <header v-if="$slots.header">
            <slot name="header">
                <h2>The header</h2>
            </slot>
        </header>
        <slot>
            <h2>The Default</h2>
        </slot>
    </div>
</template>

<script>
export default {
    mounted(){
        //Verify if came something from parent injection inside the slot, to not load empty html tag element
        console.log('Slots',this.$slots)
        console.log('Slots access by name: default',this.$slots.default)
        console.log('Slots access by name: header',this.$slots.header)
    }
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>