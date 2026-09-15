const ui = document.getElementById("ui");
const totalItems = 300; // হার্ট শেপের মোট কণার সংখ্যা (পছন্দমতো বাড়াতে পারেন)

for (let i = 1; i <= totalItems; i++) {
    const love = document.createElement("div");
    love.className = "love";
    
    // CSS-এ ব্যবহারের জন্য কাস্টম প্রোপার্টি ইনজেক্ট করা হচ্ছে
    love.style.setProperty("--i", i);
    
    love.innerHTML = `
        <div class="love_horizontal">
            <div class="love_vertical">
                <div class="love_word">I love you</div>
            </div>
        </div>
    `;
    
    ui.appendChild(love);
}