<template>
    <div>
        <h1>Active User</h1>
        <ul>
            <li>Name: {{name}}</li>
            <li>Age: {{age}}</li>
        </ul>
    </div>
</template>
<script>
export default{
    props: {
        'name': {
            type: String,
            required: true
        },
        'age': {
            type: Number,
            required: true
        }
    }
}
</script>