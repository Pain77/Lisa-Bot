/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help7",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}zerotwo`,
		        dm: true,
                        aliases: ['h7','?7','well7','menu7']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/dLfD1_Xa0WgAAAPo/zerotwo-darling.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `━━❰•𝙈𝙤𝙙𝙚𝙧𝙖𝙩𝙞𝙤𝙣•❱━━
❄ ${this.client.config.prefix}ᴀᴄᴛɪᴠᴀᴛᴇ 
❄ ${this.client.config.prefix}ᴀᴅᴅ 
❄ ${this.client.config.prefix}ᴄʟᴏꜱᴇ 
❄ ${this.client.config.prefix}ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ 
❄ ${this.client.config.prefix}ᴅᴇʟᴇᴛᴇ 
❄ ${this.client.config.prefix}ᴅᴇᴍᴏᴛᴇ 
❄ ${this.client.config.prefix}ᴇᴠᴇʀʏᴏɴᴇ 
❄ ${this.client.config.prefix}ɢʀᴏᴜᴘᴄʜᴀɴɢᴇ 
❄ ${this.client.config.prefix}ᴏᴘᴇɴ 
❄ ${this.client.config.prefix}ᴘʀᴏᴍᴏᴛᴇ 
❄ ${this.client.config.prefix}ᴘᴜʀɢᴇ 
❄ ${this.client.config.prefix}ʀᴇᴍᴏᴠᴇ 
❄ ${this.client.config.prefix}ʀᴇᴠᴏᴋᴇ
❄ ${this.client.config.prefix}ᴀɴᴛɪᴠɪʀᴛᴇx
───────────
🎗 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
───────────    
    `,
			}
		);
	};
}
