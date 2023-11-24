import { defineStore } from 'pinia';
import { ref, Ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
	// state: () => {
	// 	return {
	// 		collapse: false
	// 	};
	// },
	// getters: {},
	// actions: {
	// 	handleCollapse() {
	// 		this.collapse = !this.collapse;
	// 	}
	// }

    const collapse:Ref = ref<boolean>(false)
    const handleCollapse = () => {
        collapse.value = !collapse.value
    }
    return {
        collapse,
        handleCollapse
    }
});
