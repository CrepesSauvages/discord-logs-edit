"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const discord_js_1 = require("discord.js");
const handlers_1 = require("./handlers");
const chalk = require("chalk")
let eventRegistered = false;
module.exports = (client, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (eventRegistered)
        return;
    eventRegistered = true;
    const intents = new discord_js_1.IntentsBitField(client.options.intents);
    /* HANDLE GUILDS EVENTS */
    if (intents.has(discord_js_1.IntentsBitField.Flags.Guilds)) {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("guildUpdate event handler registered."));
        client.on('channelUpdate', (oldChannel, newChannel) => {
            (0, handlers_1.handleChannelUpdateEvent)(client, oldChannel, newChannel);
        });
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("guildUpdate event handler registered."));
        client.on('guildUpdate', (oldGuild, newGuild) => {
            (0, handlers_1.handleGuildUpdateEvent)(client, oldGuild, newGuild);
        });
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("roleUpdate event handler registered."));
        client.on('roleUpdate', (oldRole, newRole) => {
            (0, handlers_1.handleRoleUpdateEvent)(client, oldRole, newRole);
        });
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("threadUpdate event handler registered.")
                );
        client.on('threadUpdate', (oldThread, newThread) => {
            (0, handlers_1.handleThreadChannelUpdateEvent)(client, oldThread, newThread);
        });
    }
    else {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.red("[EVENT]"),
                chalk.white("channelUpdate, guildUpdate, roleUpdate and threadUpdate event handlers not registered (missing Guilds intent)."));
    }
    /* HANDLE MEMBER EVENTS */
    if (intents.has(discord_js_1.IntentsBitField.Flags.GuildMembers)) {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("guildMemberUpdate event handler registered.")
            );
        client.on('guildMemberUpdate', (oldMember, newMember) => {
            (0, handlers_1.handleGuildMemberUpdateEvent)(client, oldMember, newMember);
        });
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("userUpdate event handler registered."));
        client.on('userUpdate', (oldUser, newUser) => {
            (0, handlers_1.handleUserUpdateEvent)(client, oldUser, newUser);
        });
    }
    else {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("guildMemberUpdate, userUpdate event handlers not registered (missing GuildMembers intent)."));
    }
    /* HANDLE MESSAGE UPDATE EVENTS */
    if (intents.has(discord_js_1.IntentsBitField.Flags.GuildMessages && discord_js_1.IntentsBitField.Flags.MessageContent)) {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("messageUpdate event handler registered."));
        client.on('messageUpdate', (oldMessage, newMessage) => {
            (0, handlers_1.handleMessageUpdateEvent)(client, oldMessage, newMessage);
        });
    }
    else {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("messageUpdate event handler not registered (missing GuildMessages or MessageContent intent)."));
    }
    /* HANDLE PRESENCE UPDATE EVENTS */
    if (intents.has(discord_js_1.IntentsBitField.Flags.GuildPresences)) {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("presenceUpdate event handler registered."));
        client.on('presenceUpdate', (oldPresence, newPresence) => {
            (0, handlers_1.handlePresenceUpdateEvent)(client, oldPresence, newPresence);
        });
    }
    else {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.red("[EVENT]"),
                chalk.white("presenceUpdate event handler not registered (missing GuildPresences intent)."));
    }
    /* HANDLE VOICE STATE UPDATE */
    if (intents.has(discord_js_1.IntentsBitField.Flags.GuildVoiceStates)) {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.green("[EVENT]"),
                chalk.white("voiceStateUpdate event handler registered."));
        client.on('voiceStateUpdate', (oldState, newState) => {
            (0, handlers_1.handleVoiceStateUpdateEvent)(client, oldState, newState);
        });
    }
    else {
        if (options === null || options === void 0 ? void 0 : options.debug)
            console.log(
                chalk.red("[EVENT]"),
                chalk.white("voiceStateUpdate event handler not registered (missing GuildVoiceStates intent)."));
    }
});
