import {shallowMount, createLocalVue} from "@vue/test-utils";
import MonitoreringHandler from "@/components/MonitoreringHandler";
import VueRouter from "vue-router";
jest.mock('@/utils/Api.js');

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('MonitoreringHandler.vue', () => {
    test("some test", () => {
        const wrapper = shallowMount(MonitoreringHandler, {
            localVue,
            router
        });
        expect(wrapper.find("h2").isVisible()).toBe(true);
        expect(wrapper.find(".header-link").isVisible()).toBe(true);
    })
})