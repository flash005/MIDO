let handler = async (m, { command, text }) => m.reply(`
*【🐦‍🔥】استمارة الوورك【🐦‍🔥】*  

 *~『𝑪.𝑵.𝑹⊰🐦‍🔥⊱𝐏𝐇𝐎𝐄𝐍𝐈𝐗』~*

*✿ اللقب  / ⟦⟧*➪

*✿ ولد  ولا بنت /  ⟦⟧*➪

*✿ من طرف   /  ⟦⟧*➪

*✿ الأنمي  /   ⟦⟧*➪

*『1』ضيف صوره للشخصيه اللي اخترت لقبها《*

*『2』اذا انت مب متفاعل ف افضل لا تدخل اما اذا كنت معرك ف تنورنا ياحب《*

*『3』اخر شي وقت ما تنتهي من ملئ الاستماره اكتب .لقبني  واكتب لقبك واسم النقابة 《*

*_『𝑪.𝑵.𝑹⊰🐦‍🔥⊱𝐏𝐇𝐎𝐄𝐍𝐈𝐗』_*


*_『🌚』تحت رعاية 𝑀𝛩𝐻𝐴𝑀𝑀𝐸𝐷 𝐴𝐷𝐸𝐿《_*
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|1|استماره|استمارة)$/i

export default handler
