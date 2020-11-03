import {shallowMount, createLocalVue} from "@vue/test-utils";
import MonitoreringstillfalleHandler from "@/components/MonitoreringstillfalleHandler";
import VueRouter from "vue-router";
jest.mock('@/utils/Api.js');

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('MonitoreringstillfalleHandler.vue', () => {
    test("some test", () => {
        const wrapper = shallowMount(MonitoreringstillfalleHandler, {
            localVue,
            router
        });
        expect(wrapper.find("h2").isVisible()).toBe(true);
        expect(wrapper.find(".header-link").isVisible()).toBe(true);
    })
})