<script setup>
import { useLayout } from '@/layout/composables/layout';
import AppConfigurator from './AppConfigurator.vue';

const { onMenuToggle, toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="onMenuToggle">
                <i class="pi pi-bars"></i>
            </button>
            <router-link to="/" class="layout-topbar-logo">
                <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g>
                        <path fill="#E58906" class="st0" d="M266.11,296.98H33.89c-16.98,0-30.87-13.89-30.87-30.87V33.89c0-16.98,13.89-30.87,30.87-30.87h232.22
                            c16.98,0,30.87,13.89,30.87,30.87v232.22C296.98,283.09,283.09,296.98,266.11,296.98z" />
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M220.33,186.87l-28.74-16.59c-7.01,12.12-20.11,20.29-35.12,20.29c-22.4,0-40.56-18.16-40.56-40.56
                                    c0-11.5,4.79-21.87,12.48-29.25H60.7c-2.71,9.27-4.18,19.08-4.18,29.25c0,56.34,44.75,102.01,99.95,102.01
                                    c37.31,0,69.83-20.86,87.01-51.78L220.33,186.87z" />
                                <path fill="#FFFFFF"
                                    d="M191.59,129.72l28.75-16.59l23.14-13.36c-17.17-30.92-49.7-51.78-87.01-51.78
                                    c-41.08,0-76.36,25.29-91.73,61.45h91.73C171.48,109.44,184.58,117.6,191.59,129.72z" />
                            </g>
                        </g>
                    </g>
                </svg>

                <span>CODBEX</span>
            </router-link>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" @click="toggleDarkMode">
                    <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
                </button>
                <div class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                        type="button" class="layout-topbar-action layout-topbar-action-highlight">
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </div>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
