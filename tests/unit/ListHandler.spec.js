import {shallowMount, createLocalVue} from "@vue/test-utils";
import ListHandler from "@/components/ListHandler";
import VueRouter from "vue-router";
jest.mock('@/utils/Api.js');

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('ListHandler.vue', () => {
    test("some test", () => {
        const wrapper = shallowMount(ListHandler, {
            localVue,
            router
        });
        expect(wrapper.find("h2").isVisible()).toBe(true);
    })
})