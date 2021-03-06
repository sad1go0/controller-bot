import { Context } from "../packages/grammy.ts";

const pin = async (ctx: Context) => {
  const messageId = ctx.message!.reply_to_message!.message_id;
  await ctx.pinChatMessage(messageId);
};

export { pin };
