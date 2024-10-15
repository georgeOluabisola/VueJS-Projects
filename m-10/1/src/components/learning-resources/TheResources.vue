<template>
    <div>
        <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
    </div>
</template>

<script>
import StoredResources from "./StoredResources";
import AddResource from "./AddResource.vue";
export default {
    components:{
        StoredResources,
        AddResource
    },
    data(){
        return {
            selectedTab: 'stored-resources',
            storedResources:[
                {
                    id: 'official-guide',
                    title: 'official guide',
                    description: 'the officil vue js documentation',
                    link: 'https://www.vuejs.org/'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to gogole',
                    link: 'https://www.google.com/'
                }
            ]
        };
    },
    provide(){
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource,
        }
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addResource(title, description, url){
            const newResource  = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url,
            };

            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId){

            // this.storedResources = this.storedResources.filter((res) => res.id !== resId);
            // console.log(this.storedResources.length);
            const resIndex = this.storedResources.findIndex(res => res.id == resId);
            this.storedResources.splice(resIndex,1);
        }
    },
    computed:{
        storedResButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    }
}
</script>
