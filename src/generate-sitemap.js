const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");

const sitemap = new SitemapStream({ hostname: "https://hcah.mrg.com.bd" });

sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({ url: "/nursing", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/physiotherapy", changefreq: "weekly", priority: 0.8 });
sitemap.write({
  url: "/medical-assistant",
  changefreq: "weekly",
  priority: 0.8,
});
sitemap.write({
  url: "/medical-caregiver",
  changefreq: "weekly",
  priority: 0.8,
});
sitemap.write({ url: "/caregiver", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/nanycare", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/companion", changefreq: "weekly", priority: 0.8 });
sitemap.write({
  url: "/medical-equipment",
  changefreq: "weekly",
  priority: 0.8,
});
sitemap.write({ url: "/payment", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/blog", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/about", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/contact", changefreq: "weekly", priority: 0.8 });
sitemap.end();

streamToPromise(sitemap)
  .then((data) =>
    fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), data)
  )

  .then(() => console.log("✅ Sitemap generated successfully!"))
  .catch((err) => console.error("❌ Error generating sitemap:", err));
