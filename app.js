const { Composer, Telegraf } = require('micro-bot')

const bot = new Telegraf('5026833569:AAHkz_WlSppeYYR-BgoAWOkheFjTQRPBJPc')

const app = new Composer()

app.on("new_chat_members",(ctx=>{
    bot.telegram.sendMessage(ctx.chat.id, `أهلا بكم في قناة مُستشارك القانوني تحت إشراف المُحامي ريّان رده الثبيتي و عدد من المُحاميين و المُستشارين.

    مجموعة هدفها تعزيز الثقافة الشرعية و القانونيّة و تقديم الإستشارات الشفهيّة والمكتوبة والترافُع في القضايا، بإشراف مُستشارين و مُحامين⚖️`,{
        reply_markup:{
            inline_keyboard:[
                [{text: "عرض أنواع الإستشارات", callback_data: "t"}]
            ]
        }
    })
}))

app.action('t',ctx=>{

    ctx.answerCbQuery()
    ctx.deleteMessage()

    bot.telegram.sendMessage(ctx.chat.id,`إختر نوع إستشارتك`,{
        reply_markup:{
            inline_keyboard:[
                [{text: "عمالي", callback_data: "e"}],
                [{text: "جنائية", callback_data: "e"}],
                [{text: "تجاري", callback_data: "e"}],
                [{text: "إداري", callback_data: "e"}],
                [{text: "احوال شخصية", callback_data: "e"}],
                [{text: "المدني", callback_data: "e"}],
                [{text: "كتابة المذكرات", callback_data: "e"}],
                [{text: "كتابة العقود", callback_data: "e"}]
            ]
        }
    })
})

app.action('e',ctx=>{

    ctx.answerCbQuery()
    ctx.deleteMessage()

    bot.telegram.sendMessage(ctx.chat.id, ` المحامي ريان ردهـ الثبيتي
    للتواصل: 0502252911
    
    المحامي عبدالكريم بن خالد المالكي
    للتواصل: 0578201886
    
    المحامي حمود بن محمد العصيمي
    للتواصل: 0551790209
    
    المحامي عبد الله منصور الصبحي
    للتواصل: 0502284769
    
    المحامي علي آل غالب الشريف
    للتواصل: 0546999448`,{
        reply_markup:{
            inline_keyboard:[
                [{text: "حنث بوعده", callback_data: "t"}]
            ]
        }
    })
})

app.hears("صباح الخير",ctx=>{
    ctx.reply("صباح الخير")
})

app.hears("مساء الخير",ctx=>{
    ctx.reply("مساء النور")
})

const salam = ['السلام عليكم','السلام عليكم ورحمة الله','السلام عليكم ورحمة الله وبركاتة']

app.hears(salam,ctx=>{
    ctx.reply("وعليكم السلام ورحمة الله و بركاته")
})



//local launch
//bot.launch()


//onlline launch
module.exports = app