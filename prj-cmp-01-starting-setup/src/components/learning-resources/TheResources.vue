<template>
    <div>
        <Base-Card>
            <Base-Button @click="setSelectedTab('stored-resources')" :mode="storedResourcesButtonMode">Stored Resources</Base-Button>
            <Base-Button @click="setSelectedTab('add-resource')" :mode="addResourcesButtonMode">Add Resource</Base-Button>
        </Base-Card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    data(){
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id:'official-guide',
                    title: 'Official Guide',
                    description: 'The official VueJS documentation.',
                    link:'https://vuejs.org'
                },
                {
                    id:'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link:'https://google.com'
                }
            ]
        };
    },

    provide(){ //For child components and child components and so on
        return {
            resources: this.storedResources,
            addResource: this.addResource, //Not execute like (), but just pointing
            removeResource: this.removeResource
        }
    },

    computed:{
        storedResourcesButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResourcesButtonMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    },

    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },

        addResource(title, description, link){
            const newResource = {
                id: new Date().toISOString(),
                // title: title,
                title,
                // description: description,
                description,
                // link: link,
                link
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },

        removeResource(id){
            //This way do not work reactivity beacause keep in memory for all other components. If you check by concole.log the lenght, it will be removed but as sayed keep in memory
            // this.storedResources = this.storedResources.filter(resource => resource.id !== id)

            //Here you don't create a new array, you manipulate the same
            const resourceIndex = this.storedResources.findIndex( resource => resource.id === id);
            this.storedResources.splice(resourceIndex, 1);
        }
    }
}
</script>
