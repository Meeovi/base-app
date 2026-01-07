-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TYPE "public"."color_source" AS ENUM('99COLORS_NET', 'ART_PAINTS_YG07S', 'BYRNE', 'CRAYOLA', 'CMYK_COLOR_MODEL', 'COLORCODE_IS', 'COLORHEXA', 'COLORXS', 'CORNELL_UNIVERSITY', 'COLUMBIA_UNIVERSITY', 'DUKE_UNIVERSITY', 'ENCYCOLORPEDIA_COM', 'ETON_COLLEGE', 'FANTETTI_AND_PETRACCHI', 'FINDTHEDATA_COM', 'FERRARIO_1919', 'FEDERAL_STANDARD_595', 'FLAG_OF_INDIA', 'FLAG_OF_SOUTH_AFRICA', 'GLAZEBROOK_AND_BALDRY', 'GOOGLE', 'HEXCOLOR_CO', 'ISCC_NBS', 'KELLY_MOORE', 'MATTEL', 'MAERZ_AND_PAUL', 'MILK_PAINT', 'MUNSELL_COLOR_WHEEL', 'NATURAL_COLOR_SYSTEM', 'PANTONE', 'PLOCHERE', 'POURPRE_COM', 'RAL', 'RESENE', 'RGB_COLOR_MODEL', 'THOM_POOLE', 'UNIVERSITY_OF_ALABAMA', 'UNIVERSITY_OF_CALIFORNIA_DAVIS', 'UNIVERSITY_OF_CAMBRIDGE', 'UNIVERSITY_OF_NORTH_CAROLINA', 'UNIVERSITY_OF_TEXAS_AT_AUSTIN', 'X11_WEB', 'XONA_COM');--> statement-breakpoint
CREATE TABLE "spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"numberOfMembers" integer,
	"description" text,
	"image" uuid,
	"products" varchar(255),
	"group_rules" json,
	"owner" uuid,
	"cover_image" uuid,
	"custom_tabs" json,
	"slug" varchar(255),
	"custom_domain" varchar(255),
	"theme" json,
	"space_analytics" boolean,
	"federation_enabled" boolean,
	"default_language" varchar(255),
	"invite_only" boolean,
	"badges_enabled" boolean,
	"rss" json,
	"is_shop" boolean,
	"address" varchar(255),
	"rating" integer,
	"shipping_policy" text,
	"trusted_score" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_shop_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"shop_type_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_shop_type" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "social_connections" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"user" uuid,
	"platform" varchar(255),
	"identifier" varchar(255),
	"credentials" json,
	"active" boolean DEFAULT true
);
--> statement-breakpoint
ALTER TABLE "social_connections" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "moments_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"moments_id" integer,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "moments_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_templates" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"templates_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_templates" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "showcases_shops" (
	"id" serial PRIMARY KEY NOT NULL,
	"showcases_id" integer,
	"shops_id" integer
);
--> statement-breakpoint
ALTER TABLE "showcases_shops" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "address_cart" (
	"id" serial PRIMARY KEY NOT NULL,
	"address_id" integer,
	"cart_id" integer
);
--> statement-breakpoint
ALTER TABLE "address_cart" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "announcements" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"subject" varchar(255),
	"description" text,
	"image" uuid,
	"location" json,
	"icon" varchar(255),
	"color" varchar(255),
	"border_color" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "announcements" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "agreements" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"created" timestamp(3) DEFAULT CURRENT_TIMESTAMP,
	"content" text,
	"name" text,
	"excerpt" text,
	"type" json,
	"reference_id" bigint,
	"status" varchar(255),
	"updated" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "agreements" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "advertising" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"link" varchar(255),
	"start_date" timestamp,
	"end_time" timestamp
);
--> statement-breakpoint
ALTER TABLE "advertising" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "articles_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"articles_id" integer,
	"comments_id" integer
);
--> statement-breakpoint
ALTER TABLE "articles_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "media_folders" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"user" uuid,
	"parent_folder" integer
);
--> statement-breakpoint
CREATE TABLE "seasons_videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"seasons_id" integer,
	"videos_id" integer
);
--> statement-breakpoint
ALTER TABLE "seasons_videos" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_cities" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"cities_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_cities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"content" text,
	"file" uuid,
	"username" varchar(255),
	"user_avatar" varchar(255),
	"image" uuid,
	"title" varchar(255),
	"type" varchar(255),
	"status" varchar(255),
	"audio" uuid,
	"slug" varchar(255),
	"author" uuid,
	"pinned_post" boolean,
	"auto_publish" boolean,
	"mastodon_id" varchar(255),
	"blsky_id" varchar(255),
	"target_audience" varchar(255),
	"visibility_scope" varchar(255),
	"link_preview" json,
	"content_type" varchar(255),
	"views" integer
);
--> statement-breakpoint
ALTER TABLE "posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "countries_timezones" (
	"id" serial PRIMARY KEY NOT NULL,
	"countries_id" integer,
	"timezones_id" integer
);
--> statement-breakpoint
ALTER TABLE "countries_timezones" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"articles_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_articles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_states" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"states_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_states" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "brands_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"brands_id" bigint,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "brands_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "buyagain" (
	"id" serial PRIMARY KEY NOT NULL,
	"date_created" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "buyagain" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "cities" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"postalCode" text,
	"image" uuid,
	"longitude" varchar(255),
	"latitude" varchar(255),
	"languagenames" text
);
--> statement-breakpoint
ALTER TABLE "cities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "cities_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"cities_id" integer,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "cities_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "cart_cart_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"cart_id" integer,
	"cart_items_id" integer
);
--> statement-breakpoint
ALTER TABLE "cart_cart_items" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "templates_space_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"templates_id" integer,
	"space_types_id" integer
);
--> statement-breakpoint
ALTER TABLE "templates_space_types" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "space_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"slug" varchar(255),
	"allowed_content_types" json,
	"default_tabs" json,
	"custom_tabs" json,
	"description" text,
	"icon" uuid,
	"component_path" text,
	"layout_name" varchar(255),
	"remote_url" varchar(255),
	"enabled" boolean DEFAULT true
);
--> statement-breakpoint
ALTER TABLE "space_types" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "project_board_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_board_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "project_board_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "posts_polls" (
	"id" serial PRIMARY KEY NOT NULL,
	"posts_id" integer,
	"polls_id" integer
);
--> statement-breakpoint
ALTER TABLE "posts_polls" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "moments" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"date_created" timestamp with time zone,
	"content" text,
	"type" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "moments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "platform" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'active' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"image" uuid
);
--> statement-breakpoint
ALTER TABLE "platform" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "incentives" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"incentive_type" varchar(255),
	"amount" numeric(10, 5),
	"user_id" uuid,
	"expires_at" timestamp with time zone,
	"metadata" json
);
--> statement-breakpoint
ALTER TABLE "incentives" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "incentives_currency" (
	"id" serial PRIMARY KEY NOT NULL,
	"incentives_id" integer,
	"currency_id" integer
);
--> statement-breakpoint
ALTER TABLE "incentives_currency" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "countries" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(100),
	"iso3" char(3),
	"iso2" char(2),
	"phonecode" varchar(255),
	"capital" varchar(255),
	"tld" varchar(255),
	"native" varchar(255),
	"translations" text,
	"latitude" numeric(10, 8),
	"longitude" numeric(11, 8),
	"emoji" varchar(191),
	"emojiU" varchar(191),
	"created_at" timestamp,
	"updated_at" timestamp,
	"flag" integer DEFAULT 1 NOT NULL,
	"wikiDataId" varchar(255),
	"region" json
);
--> statement-breakpoint
ALTER TABLE "countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "coupons_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "coupons_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "cross_sell_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"sort" integer,
	"user" uuid
);
--> statement-breakpoint
ALTER TABLE "cross_sell_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "moments_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"moments_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "moments_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_space_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"space_types_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_space_types" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"projects_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "projects_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "address_cities" (
	"id" serial PRIMARY KEY NOT NULL,
	"address_id" integer,
	"cities_id" integer
);
--> statement-breakpoint
ALTER TABLE "address_cities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "ai_prompts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"user_created" uuid,
	"date_updated" timestamp with time zone,
	"user_updated" uuid,
	"name" varchar(255),
	"status" varchar(255) DEFAULT 'draft',
	"description" text,
	"system_prompt" text,
	"messages" json,
	CONSTRAINT "ai_prompts_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "ai_prompts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "Space_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "Space_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "platform_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"platform_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "platform_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "address" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"type" json,
	"address" text,
	"address2" varchar(255),
	"postalcode" varchar(255),
	"firstName" varchar(255),
	"lastName" varchar(255),
	"company" varchar(255),
	"email" varchar(255),
	"telephone" varchar(255),
	"format" varchar(255),
	"user" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "address" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "Space" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"image" uuid,
	"media" uuid,
	"numberOfMembers" varchar(255),
	"groupType" varchar(255),
	"creator_id" bigint,
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "Space" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "advertising_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "advertising_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"name" varchar(255),
	"description" text,
	"url" varchar(255),
	"image" uuid,
	"operating_systems" json,
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "applications" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "agreements_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid
);
--> statement-breakpoint
ALTER TABLE "agreements_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"excerpt" text,
	"content" text,
	"created_at" timestamp with time zone,
	"image" uuid,
	"type" json,
	"isPublic" boolean,
	"stamp" integer,
	"slug" varchar(255),
	"author" uuid
);
--> statement-breakpoint
ALTER TABLE "articles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "address_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"address_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "address_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "careers" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"url" varchar(255),
	"description" text,
	"type" varchar(255),
	"image" uuid,
	"degree_level" varchar(255),
	"experience" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "careers" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "finance_index_region" (
	"id" serial PRIMARY KEY NOT NULL,
	"finance_index_id" integer,
	"region_id" integer
);
--> statement-breakpoint
ALTER TABLE "finance_index_region" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "finance_index" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"previous_close" varchar(255),
	"day_range" varchar(255),
	"year_range" varchar(255),
	"today_price" varchar(255),
	"stock_up_down" boolean,
	"stock_exchange_name" varchar(255),
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "finance_index" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "cart_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"quantity" integer,
	"metadata" json,
	"products" bigint,
	"cart" integer,
	"product_id" varchar(255),
	"price" integer,
	"total" integer,
	"variant_id" varchar(255),
	"variant" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "cart_items" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "finance_index_currency" (
	"id" serial PRIMARY KEY NOT NULL,
	"finance_index_id" integer,
	"currency_id" integer
);
--> statement-breakpoint
ALTER TABLE "finance_index_currency" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "cities_states" (
	"id" serial PRIMARY KEY NOT NULL,
	"cities_id" integer
);
--> statement-breakpoint
ALTER TABLE "cities_states" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "comments_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"comment_id" integer,
	"user_id" uuid
);
--> statement-breakpoint
ALTER TABLE "comments_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_fields" (
	"id" serial PRIMARY KEY NOT NULL,
	"collection" varchar(64) NOT NULL,
	"field" varchar(64) NOT NULL,
	"special" varchar(64),
	"interface" varchar(64),
	"options" json,
	"display" varchar(64),
	"display_options" json,
	"readonly" boolean DEFAULT false NOT NULL,
	"hidden" boolean DEFAULT false NOT NULL,
	"sort" integer,
	"width" varchar(30) DEFAULT 'full',
	"translations" json,
	"note" text,
	"conditions" json,
	"required" boolean DEFAULT false,
	"group" varchar(64),
	"validation" json,
	"validation_message" text,
	"searchable" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
ALTER TABLE "directus_fields" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "collections_brands" (
	"id" serial PRIMARY KEY NOT NULL,
	"collections_id" bigint,
	"brands_id" bigint
);
--> statement-breakpoint
ALTER TABLE "collections_brands" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "colors" (
	"id" bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "colors_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"name" text,
	"hex" text NOT NULL,
	"red" smallint,
	"green" smallint,
	"blue" smallint,
	"hue" smallint,
	"sat_hsl" smallint,
	"light_hsl" smallint,
	"sat_hsv" smallint,
	"val_hsv" smallint,
	"source" "color_source"
);
--> statement-breakpoint
ALTER TABLE "colors" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "comments_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"comments_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "comments_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "comments_shorts" (
	"id" serial PRIMARY KEY NOT NULL,
	"comments_id" integer,
	"shorts_id" integer
);
--> statement-breakpoint
ALTER TABLE "comments_shorts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "categories_shorts" (
	"id" serial PRIMARY KEY NOT NULL,
	"categories_id" integer,
	"shorts_id" integer
);
--> statement-breakpoint
ALTER TABLE "categories_shorts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "categories_postgresstores" (
	"id" serial PRIMARY KEY NOT NULL,
	"categories_id" integer,
	"postgresstores_id" integer
);
--> statement-breakpoint
ALTER TABLE "categories_postgresstores" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "currency_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"currency_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "currency_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "currency" (
	"id" serial PRIMARY KEY NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"code" varchar(255),
	"symbol" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "currency" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_access" (
	"id" uuid PRIMARY KEY NOT NULL,
	"role" uuid,
	"user" uuid,
	"policy" uuid NOT NULL,
	"sort" integer
);
--> statement-breakpoint
ALTER TABLE "directus_access" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "departments_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"departments_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "departments_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "departments_collections" (
	"id" serial PRIMARY KEY NOT NULL,
	"departments_id" integer,
	"collections_id" bigint
);
--> statement-breakpoint
ALTER TABLE "departments_collections" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "currencies_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "currencies_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "digiboard" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"board" text,
	"created_at" timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"image" uuid
);
--> statement-breakpoint
ALTER TABLE "digiboard" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"content" text,
	"color" varchar(255),
	"image" uuid,
	"colortext" varchar(255),
	"menus" json,
	"callouts" json,
	"slug" varchar(255),
	"active" varchar(255),
	"relative_id" varchar(255),
	"type" varchar(255),
	"custom_domain" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "departments_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"departments_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "departments_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_comments" (
	"id" uuid PRIMARY KEY NOT NULL,
	"collection" varchar(64) NOT NULL,
	"item" varchar(255) NOT NULL,
	"comment" text NOT NULL,
	"date_created" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"date_updated" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"user_created" uuid,
	"user_updated" uuid
);
--> statement-breakpoint
ALTER TABLE "directus_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "departments_shorts" (
	"id" serial PRIMARY KEY NOT NULL,
	"departments_id" integer,
	"shorts_id" integer
);
--> statement-breakpoint
ALTER TABLE "departments_shorts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "platform_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"platform_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "platform_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer,
	"lists_id" integer
);
--> statement-breakpoint
ALTER TABLE "events_lists" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer,
	"invoices_id" bigint
);
--> statement-breakpoint
ALTER TABLE "events_invoices" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "digiboard_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "digiboard_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_activity" (
	"id" serial PRIMARY KEY NOT NULL,
	"action" varchar(45) NOT NULL,
	"user" uuid,
	"timestamp" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"ip" varchar(50),
	"user_agent" text,
	"collection" varchar(64) NOT NULL,
	"item" varchar(255) NOT NULL,
	"origin" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "directus_activity" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_collections" (
	"collection" varchar(64) PRIMARY KEY NOT NULL,
	"icon" varchar(64),
	"note" text,
	"display_template" varchar(255),
	"hidden" boolean DEFAULT false NOT NULL,
	"singleton" boolean DEFAULT false NOT NULL,
	"translations" json,
	"archive_field" varchar(64),
	"archive_app_filter" boolean DEFAULT true NOT NULL,
	"archive_value" varchar(255),
	"unarchive_value" varchar(255),
	"sort_field" varchar(64),
	"accountability" varchar(255) DEFAULT 'all',
	"color" varchar(255),
	"item_duplication_fields" json,
	"sort" integer,
	"group" varchar(64),
	"collapse" varchar(255) DEFAULT 'open' NOT NULL,
	"preview_url" varchar(255),
	"versioning" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
ALTER TABLE "directus_collections" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_operations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"key" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"position_x" integer NOT NULL,
	"position_y" integer NOT NULL,
	"options" json,
	"resolve" uuid,
	"reject" uuid,
	"flow" uuid NOT NULL,
	"date_created" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"user_created" uuid,
	CONSTRAINT "directus_operations_resolve_unique" UNIQUE("resolve"),
	CONSTRAINT "directus_operations_reject_unique" UNIQUE("reject")
);
--> statement-breakpoint
ALTER TABLE "directus_operations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "platform_pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"platform_id" integer,
	"pages_id" integer
);
--> statement-breakpoint
ALTER TABLE "platform_pages" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_files" (
	"id" uuid PRIMARY KEY NOT NULL,
	"storage" varchar(255) NOT NULL,
	"filename_disk" varchar(255),
	"filename_download" varchar(255) NOT NULL,
	"title" varchar(255),
	"type" varchar(255),
	"folder" uuid,
	"uploaded_by" uuid,
	"created_on" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"modified_by" uuid,
	"modified_on" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"charset" varchar(50),
	"filesize" bigint,
	"width" integer,
	"height" integer,
	"duration" integer,
	"embed" varchar(200),
	"description" text,
	"location" text,
	"tags" text,
	"metadata" json,
	"focal_point_x" integer,
	"focal_point_y" integer,
	"tus_id" varchar(64),
	"tus_data" json,
	"uploaded_on" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "directus_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_folders" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"parent" uuid
);
--> statement-breakpoint
ALTER TABLE "directus_folders" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_policies" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"icon" varchar(64) DEFAULT 'badge' NOT NULL,
	"description" text,
	"ip_access" text,
	"enforce_tfa" boolean DEFAULT false NOT NULL,
	"admin_access" boolean DEFAULT false NOT NULL,
	"app_access" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
ALTER TABLE "directus_policies" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_panels" (
	"id" uuid PRIMARY KEY NOT NULL,
	"dashboard" uuid NOT NULL,
	"name" varchar(255),
	"icon" varchar(64) DEFAULT NULL,
	"color" varchar(10),
	"show_header" boolean DEFAULT false NOT NULL,
	"note" text,
	"type" varchar(255) NOT NULL,
	"position_x" integer NOT NULL,
	"position_y" integer NOT NULL,
	"width" integer NOT NULL,
	"height" integer NOT NULL,
	"options" json,
	"date_created" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"user_created" uuid
);
--> statement-breakpoint
ALTER TABLE "directus_panels" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_relations" (
	"id" serial PRIMARY KEY NOT NULL,
	"many_collection" varchar(64) NOT NULL,
	"many_field" varchar(64) NOT NULL,
	"one_collection" varchar(64),
	"one_field" varchar(64),
	"one_collection_field" varchar(64),
	"one_allowed_collections" text,
	"junction_field" varchar(64),
	"sort_field" varchar(64),
	"one_deselect_action" varchar(255) DEFAULT 'nullify' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "directus_relations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "platform_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"platform_id" integer,
	"lists_id" integer
);
--> statement-breakpoint
ALTER TABLE "platform_lists" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "gamification_videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"gamification_id" integer,
	"videos_id" integer
);
--> statement-breakpoint
ALTER TABLE "gamification_videos" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "integrations_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_ratings" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"ratings_id" integer
);
--> statement-breakpoint
ALTER TABLE "integrations_ratings" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "integrations_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "transactions_currency" (
	"id" serial PRIMARY KEY NOT NULL,
	"transactions_id" bigint,
	"currency_id" integer
);
--> statement-breakpoint
ALTER TABLE "transactions_currency" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_permissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"collection" varchar(64) NOT NULL,
	"action" varchar(10) NOT NULL,
	"permissions" json,
	"validation" json,
	"presets" json,
	"fields" text,
	"policy" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "directus_permissions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_migrations" (
	"version" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"timestamp" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
ALTER TABLE "directus_migrations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "platform_navigation" (
	"id" serial PRIMARY KEY NOT NULL,
	"platform_id" integer,
	"navigation_id" integer
);
--> statement-breakpoint
ALTER TABLE "platform_navigation" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_webhooks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"method" varchar(10) DEFAULT 'POST' NOT NULL,
	"url" varchar(255) NOT NULL,
	"status" varchar(10) DEFAULT 'active' NOT NULL,
	"data" boolean DEFAULT true NOT NULL,
	"actions" varchar(100) NOT NULL,
	"collections" varchar(255) NOT NULL,
	"headers" json,
	"was_active_before_deprecation" boolean DEFAULT false NOT NULL,
	"migrated_flow" uuid
);
--> statement-breakpoint
ALTER TABLE "directus_webhooks" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "incentives_orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"incentives_id" integer,
	"orders_id" integer
);
--> statement-breakpoint
ALTER TABLE "incentives_orders" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_shares" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"collection" varchar(64) NOT NULL,
	"item" varchar(255) NOT NULL,
	"role" uuid,
	"password" varchar(255),
	"user_created" uuid,
	"date_created" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"date_start" timestamp with time zone,
	"date_end" timestamp with time zone,
	"times_used" integer DEFAULT 0,
	"max_uses" integer
);
--> statement-breakpoint
ALTER TABLE "directus_shares" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "report_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"report_id" integer,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "report_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "list_items_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"list_items_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "list_items_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "platform_articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"platform_id" integer,
	"articles_id" integer
);
--> statement-breakpoint
ALTER TABLE "platform_articles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_translations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"language" varchar(255) NOT NULL,
	"key" varchar(255) NOT NULL,
	"value" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "directus_translations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_versions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"key" varchar(64) NOT NULL,
	"name" varchar(255),
	"collection" varchar(64) NOT NULL,
	"item" varchar(255) NOT NULL,
	"hash" varchar(255),
	"date_created" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"date_updated" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"user_created" uuid,
	"user_updated" uuid,
	"delta" json
);
--> statement-breakpoint
ALTER TABLE "directus_versions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_coupons" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer
);
--> statement-breakpoint
ALTER TABLE "events_coupons" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_cities" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer,
	"cities_id" integer
);
--> statement-breakpoint
ALTER TABLE "events_cities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_states" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer,
	"states_id" integer
);
--> statement-breakpoint
ALTER TABLE "events_states" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "faqs_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"faqs_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "faqs_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "faqs_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"faqs_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "faqs_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "faqs_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"faqs_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "faqs_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "incentives_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"incentives_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "incentives_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "circles_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "circles_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "navigation_websites" (
	"id" serial PRIMARY KEY NOT NULL,
	"navigation_id" integer,
	"websites_id" bigint
);
--> statement-breakpoint
ALTER TABLE "navigation_websites" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "feeds" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"updated_at" timestamp with time zone,
	"user" uuid,
	"shop" integer,
	"context_id" uuid,
	"context_type" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "feeds" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "feeds_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"feed_id" bigint,
	"post_id" integer
);
--> statement-breakpoint
ALTER TABLE "feeds_posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "gamification_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"gamification_id" integer,
	"events_id" integer
);
--> statement-breakpoint
ALTER TABLE "gamification_events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "followers" (
	"id" serial PRIMARY KEY NOT NULL,
	"following_id" uuid,
	"follower_id" uuid,
	"profile_following" uuid DEFAULT gen_random_uuid(),
	"profile_followers" uuid DEFAULT gen_random_uuid(),
	CONSTRAINT "followers_profile_following_key" UNIQUE("profile_following"),
	CONSTRAINT "followers_profile_followers_key" UNIQUE("profile_followers")
);
--> statement-breakpoint
ALTER TABLE "followers" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "gamification" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"user_created" uuid,
	"user_updated" uuid,
	"name" varchar(255),
	"time_limit" timestamp,
	"user_profile" integer,
	"ranks" json,
	"achievement_type" json,
	"points_type" json,
	"open_badge_compatible" varchar(255),
	"nomination_user" uuid,
	"birthdays" uuid,
	"leaderboards" uuid,
	"anniversaries" uuid,
	"progress" varchar(255),
	"daily_login_rewards" timestamp with time zone,
	"time_based_awards" timestamp,
	"referrals" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "gamification" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_report" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"report_id" integer
);
--> statement-breakpoint
ALTER TABLE "integrations_report" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "integrations_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "invoices_address" (
	"id" serial PRIMARY KEY NOT NULL,
	"invoice_id" bigint,
	"address_id" integer
);
--> statement-breakpoint
ALTER TABLE "invoices_address" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "payments_currency" (
	"id" serial PRIMARY KEY NOT NULL,
	"payments_id" integer,
	"currency_id" integer
);
--> statement-breakpoint
ALTER TABLE "payments_currency" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "page_blocks_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_blocks_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "page_blocks_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"content" text,
	"list" json,
	"type" varchar(255),
	"link" varchar(255),
	"image" uuid,
	"repeaterTextBox" json,
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "pages" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone,
	"updated_at" timestamp with time zone,
	"base_currency_code" text,
	"base_discount_amount" integer,
	"base_grand_total" integer,
	"base_discount_tax_compensation_amount" integer,
	"base_shipping_amount" integer,
	"base_shipping_discount_tax_compensation_amnt" integer,
	"base_shipping_incl_tax" integer,
	"base_shipping_tax_amount" integer,
	"base_subtotal" integer,
	"base_subtotal_incl_tax" integer,
	"base_tax_amount" integer,
	"base_total_refunded" integer,
	"base_to_global_rate" integer,
	"base_to_order_rate" integer,
	"can_void_flag" integer,
	"discount_amount" integer,
	"discount_description" text,
	"email_sent" integer,
	"entity_id" integer,
	"global_currency_code" text,
	"grand_total" integer,
	"discount_tax_compensation_amount" integer,
	"increment_id" text,
	"is_used_for_refund" integer,
	"order_currency_code" text,
	"shipping_amount" integer,
	"shipping_discount_tax_compensation_amount" integer,
	"shipping_incl_tax" integer,
	"shipping_tax_amount" integer,
	"state" integer,
	"store_currency_code" text,
	"store_id" integer,
	"store_to_base_rate" integer,
	"store_to_order_rate" integer,
	"subtotal" integer,
	"subtotal_incl_tax" integer,
	"tax_amount" integer,
	"total_qty" integer,
	"user" uuid,
	"plan" varchar(255),
	"service_period" varchar(255),
	"payment_period" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "invoices" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "invoices_orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"invoice_id" bigint,
	"order_id" integer
);
--> statement-breakpoint
ALTER TABLE "invoices_orders" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "invoices_transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"invoice_id" bigint,
	"transaction_id" bigint
);
--> statement-breakpoint
ALTER TABLE "invoices_transactions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "list_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"list_id" integer,
	"post_id" integer,
	"title" varchar(255),
	"description" text,
	"status" varchar(255),
	"due_date" timestamp,
	"link" varchar(255),
	"media" uuid,
	"priority" varchar(255),
	"position" integer,
	"is_checked" boolean,
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "list_items" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "list_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"date_created" timestamp with time zone,
	"product_sku" varchar(255),
	"quantity" integer
);
--> statement-breakpoint
ALTER TABLE "list_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "manufacturer" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP,
	"code" text,
	"name" text,
	"description" text,
	"isPublic" boolean,
	"image" uuid
);
--> statement-breakpoint
ALTER TABLE "manufacturer" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"list_id" integer,
	"user_id" uuid
);
--> statement-breakpoint
ALTER TABLE "lists_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "postgresstores_websites" (
	"id" serial PRIMARY KEY NOT NULL,
	"postgresstores_id" integer,
	"websites_id" bigint
);
--> statement-breakpoint
ALTER TABLE "postgresstores_websites" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "products_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"image" uuid,
	"type" varchar(255),
	"status" varchar(255),
	"favorite" varchar(255),
	"product_sku" json,
	"slug" varchar(255),
	"priority" varchar(255),
	"progress" integer
);
--> statement-breakpoint
ALTER TABLE "lists" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "manufacturer_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"manufacturer_id" bigint,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "manufacturer_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "circles_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"posts_id" integer
);
--> statement-breakpoint
ALTER TABLE "circles_posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"title" varchar(255),
	"content" text
);
--> statement-breakpoint
ALTER TABLE "messages" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "platform_page_blocks" (
	"id" serial PRIMARY KEY NOT NULL,
	"platform_id" integer,
	"page_blocks_id" integer
);
--> statement-breakpoint
ALTER TABLE "platform_page_blocks" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "newsletters" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP,
	"first_name" varchar(255),
	"last_name" varchar(255),
	"status" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "newsletters" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "order_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"quantity" integer,
	"price" numeric(10, 5)
);
--> statement-breakpoint
ALTER TABLE "order_items" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "order_items_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_items_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "order_items_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "radios" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"format" varchar(255),
	"satellite" varchar(255),
	"internet" varchar(255),
	"description" text,
	"image" uuid,
	"file" uuid,
	"creator" varchar(255),
	"type" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "radios" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "radios_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"radios_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "radios_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" text,
	"birth_date" date,
	"description" text,
	"slug" varchar(255) DEFAULT NULL,
	"company" varchar(255),
	"activitypub_handle" varchar(255),
	"dropshipping_partner_id" varchar(255),
	"user" uuid,
	"commerce_auth_id" varchar(255),
	"cms_auth_id" varchar(255),
	"keycloak_id" varchar(255),
	"supabase_user_id" uuid,
	"role" uuid,
	"seller_requested" boolean,
	"seller_approved" boolean,
	"position" varchar(255),
	"links" json,
	"magento_customer_id" varchar(255),
	"avatar" uuid,
	CONSTRAINT "profiles_username_unique" UNIQUE("username"),
	CONSTRAINT "profiles_slug_unique" UNIQUE("slug"),
	CONSTRAINT "profiles_user_unique" UNIQUE("user"),
	CONSTRAINT "profiles_supabase_user_id_unique" UNIQUE("supabase_user_id")
);
--> statement-breakpoint
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "radios_musicchart" (
	"id" serial PRIMARY KEY NOT NULL,
	"radios_id" integer
);
--> statement-breakpoint
ALTER TABLE "radios_musicchart" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "orders_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"orders_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "orders_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "outlets_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"outlets_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "outlets_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"type" varchar(255),
	"adjustment_negative" integer,
	"adjustment_positive" integer,
	"applied_rule_ids" text,
	"base_adjustment_negative" integer,
	"base_adjustment_positive" integer,
	"base_currency_code" text,
	"base_discount_amount" integer,
	"base_discount_canceled" integer,
	"base_discount_invoiced" integer,
	"base_discount_refunded" integer,
	"base_grand_total" integer,
	"base_discount_tax_compensation_amount" integer,
	"base_discount_tax_compensation_invoiced" integer,
	"base_discount_tax_compensation_refunded" integer,
	"base_shipping_amount" integer,
	"base_shipping_canceled" integer,
	"base_shipping_discount_amount" integer,
	"base_shipping_discount_tax_compensation_amnt" integer,
	"base_shipping_incl_tax" integer,
	"base_shipping_invoiced" integer,
	"base_shipping_refunded" integer,
	"base_shipping_tax_amount" integer,
	"base_shipping_tax_refunded" integer,
	"base_subtotal" integer,
	"base_subtotal_canceled" integer,
	"base_subtotal_incl_tax" integer,
	"base_subtotal_invoiced" integer,
	"base_subtotal_refunded" integer,
	"base_tax_amount" integer,
	"base_tax_canceled" integer,
	"base_tax_invoiced" integer,
	"base_tax_refunded" integer,
	"base_total_canceled" integer,
	"base_total_due" integer,
	"base_total_invoiced" integer,
	"base_total_invoiced_cost" integer,
	"base_total_offline_refunded" integer,
	"base_total_online_refunded" integer,
	"base_total_paid" integer,
	"base_total_qty_ordered" integer,
	"base_total_refunded" integer,
	"base_to_global_rate" integer,
	"base_to_order_rate" integer,
	"billing_address_id" integer,
	"can_ship_partially" integer,
	"can_ship_partially_item" integer,
	"coupon_code" text,
	"customer_dob" text,
	"customer_email" text,
	"customer_firstname" text,
	"customer_gender" integer,
	"customer_group_id" integer,
	"customer_id" integer,
	"customer_is_guest" integer,
	"customer_lastname" text,
	"customer_middlename" text,
	"customer_note" text,
	"customer_note_notify" integer,
	"customer_prefix" text,
	"customer_suffix" text,
	"customer_taxvat" text,
	"discount_amount" integer,
	"discount_canceled" integer,
	"discount_description" text,
	"discount_invoiced" integer,
	"discount_refunded" integer,
	"edit_increment" integer,
	"email_sent" integer,
	"entity_id" integer,
	"ext_customer_id" text,
	"ext_order_id" text,
	"forced_shipment_with_invoice" integer,
	"global_currency_code" text,
	"grand_total" integer,
	"discount_tax_compensation_amount" integer,
	"discount_tax_compensation_invoiced" integer,
	"discount_tax_compensation_refunded" integer,
	"hold_before_state" text,
	"hold_before_status" text,
	"increment_id" text,
	"is_virtual" integer,
	"order_currency_code" text,
	"original_increment_id" text,
	"payment_authorization_amount" integer,
	"payment_auth_expiration" integer,
	"protect_code" text,
	"quote_address_id" integer,
	"quote_id" integer,
	"relation_child_id" text,
	"relation_child_real_id" text,
	"relation_parent_id" text,
	"relation_parent_real_id" text,
	"remote_ip" text,
	"shipping_amount" integer,
	"shipping_canceled" integer,
	"shipping_description" text,
	"shipping_discount_amount" integer,
	"shipping_discount_tax_compensation_amount" integer,
	"shipping_incl_tax" integer,
	"shipping_invoiced" integer,
	"shipping_refunded" integer,
	"shipping_tax_amount" integer,
	"shipping_tax_refunded" integer,
	"state" text,
	"store_currency_code" text,
	"store_id" integer,
	"store_name" text,
	"store_to_base_rate" integer,
	"store_to_order_rate" integer,
	"subtotal" integer,
	"subtotal_canceled" integer,
	"subtotal_incl_tax" integer,
	"subtotal_invoiced" integer,
	"subtotal_refunded" integer,
	"tax_amount" integer,
	"tax_canceled" integer,
	"tax_invoiced" integer,
	"tax_refunded" integer,
	"total_canceled" integer,
	"total_due" integer,
	"total_invoiced" integer,
	"total_item_count" integer,
	"total_offline_refunded" integer,
	"total_online_refunded" integer,
	"total_paid" integer,
	"total_qty_ordered" integer,
	"total_refunded" integer,
	"weight" integer,
	"x_forwarded_for" text,
	"payment_status" varchar(255),
	"user_id" uuid
);
--> statement-breakpoint
ALTER TABLE "orders" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "outlets" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"color" varchar(255),
	"colortext" varchar(255),
	"description" text,
	"image" uuid,
	"callouts" json,
	"uid" varchar(255),
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "outlets" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"description" text,
	"gateway" varchar(255),
	"amount" numeric(10, 5),
	"created_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "payments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "pickup_locations" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"phone" bigint,
	"address" varchar(255),
	"postcode" varchar(255),
	"pickup_location_code" varchar(255),
	"contact_name" varchar(255),
	"email" varchar(255),
	"fax" varchar(255),
	"latitude" varchar(255),
	"longitude" varchar(255),
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "pickup_locations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "payments_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"payments_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "payments_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "related_products_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"related_products_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "related_products_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "region" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone,
	"region_id" integer,
	"name" varchar(255),
	"code" varchar(255),
	"description" text,
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "region" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "region_shipping_address" (
	"id" serial PRIMARY KEY NOT NULL,
	"region_id" integer,
	"shipping_address_id" integer
);
--> statement-breakpoint
ALTER TABLE "region_shipping_address" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "report_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"report_id" integer,
	"comments_id" integer
);
--> statement-breakpoint
ALTER TABLE "report_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "report_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"report_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "report_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "report_faqs" (
	"id" serial PRIMARY KEY NOT NULL,
	"report_id" integer,
	"faqs_id" integer
);
--> statement-breakpoint
ALTER TABLE "report_faqs" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "pickup_locations_city" (
	"id" serial PRIMARY KEY NOT NULL,
	"pickup_locations_id" integer,
	"item" varchar(255),
	"collection" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "pickup_locations_city" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "pickup_locations_country" (
	"id" serial PRIMARY KEY NOT NULL,
	"pickup_locations_id" integer,
	"item" varchar(255),
	"collection" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "pickup_locations_country" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "pickup_locations_state" (
	"id" serial PRIMARY KEY NOT NULL,
	"pickup_locations_id" integer,
	"item" varchar(255),
	"collection" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "pickup_locations_state" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipment" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone,
	"updated_at" timestamp with time zone,
	"email_sent" integer,
	"user" uuid,
	"order" integer,
	"shipment_status" varchar(255),
	"shipping_label" varchar(255),
	"store_id" integer,
	"total_qty" integer,
	"total_weight" integer,
	"code" varchar(255),
	"cost" integer,
	"delivery_time" varchar(255),
	"delivery_window" varchar(255),
	"carrier_matrix" json
);
--> statement-breakpoint
ALTER TABLE "shipment" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "finance_index_articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"finance_index_id" integer,
	"articles_id" integer
);
--> statement-breakpoint
ALTER TABLE "finance_index_articles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipment_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"shipment_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "shipment_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "outlets_shorts" (
	"id" serial PRIMARY KEY NOT NULL,
	"outlets_id" integer,
	"shorts_id" integer
);
--> statement-breakpoint
ALTER TABLE "outlets_shorts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "report_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"report_id" integer,
	"posts_id" integer
);
--> statement-breakpoint
ALTER TABLE "report_posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "products_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_currency" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"currency_id" integer
);
--> statement-breakpoint
ALTER TABLE "products_currency" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "products_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_manufacturer" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"manufacturer_id" bigint
);
--> statement-breakpoint
ALTER TABLE "products_manufacturer" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" bigint,
	"user_id" uuid
);
--> statement-breakpoint
ALTER TABLE "products_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shorts" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"video_url" varchar(255),
	"duration" varchar(255),
	"host" varchar(255),
	"thumbnail" uuid,
	"dateTime" timestamp,
	"type" varchar(255),
	"age_requirement" varchar(255),
	"creator" varchar(255),
	"video" uuid,
	"watch_time" varchar(255),
	"click_through_rate" varchar(255),
	"conversion" varchar(255),
	"saves" varchar(255),
	"favorite" boolean,
	"age_gate" varchar(255),
	"region" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "shorts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipping_addresses_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"shipping_addresses_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "shipping_addresses_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipping_addresses_orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"shipping_addresses_id" integer,
	"orders_id" integer
);
--> statement-breakpoint
ALTER TABLE "shipping_addresses_orders" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_product_designer" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"item" varchar(255),
	"collection" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "products_product_designer" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "postgresstores_collections" (
	"id" serial PRIMARY KEY NOT NULL,
	"postgresstores_id" integer,
	"collections_id" bigint
);
--> statement-breakpoint
ALTER TABLE "postgresstores_collections" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "ratings_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"ratings_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "ratings_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "reactions_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"reactions_id" integer,
	"comments_id" integer
);
--> statement-breakpoint
ALTER TABLE "reactions_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_websites" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"websites_id" bigint
);
--> statement-breakpoint
ALTER TABLE "products_websites" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "reactions_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"reactions_id" integer,
	"lists_id" integer
);
--> statement-breakpoint
ALTER TABLE "reactions_lists" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "reactions_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"reaction_id" integer,
	"user_id" uuid
);
--> statement-breakpoint
ALTER TABLE "reactions_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "reactions_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"reactions_id" integer,
	"posts_id" integer
);
--> statement-breakpoint
ALTER TABLE "reactions_posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "reactions_shorts" (
	"id" serial PRIMARY KEY NOT NULL,
	"reactions_id" integer,
	"shorts_id" integer
);
--> statement-breakpoint
ALTER TABLE "reactions_shorts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "report_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"report_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "report_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shorts_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"shorts_id" integer,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "shorts_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "site_preference_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "site_preference_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "site_preference_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "site_preference_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "user_friends_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_friends_id" integer,
	"posts_id" integer
);
--> statement-breakpoint
ALTER TABLE "user_friends_posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "project_board_projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_board_id" integer,
	"projects_id" integer
);
--> statement-breakpoint
ALTER TABLE "project_board_projects" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "emoji_reactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"target_type" text,
	"target_id" uuid NOT NULL,
	"user_id" uuid,
	"emoji" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "emoji_reactions_target_type_check" CHECK (target_type = ANY (ARRAY['video'::text, 'comment'::text]))
);
--> statement-breakpoint
ALTER TABLE "emoji_reactions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "returns_orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"returns_id" integer,
	"orders_id" integer
);
--> statement-breakpoint
ALTER TABLE "returns_orders" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "reviews_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "reviews_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"due_date" timestamp,
	"priority" varchar(255),
	"budget" integer,
	"spend" integer,
	"difference" integer,
	"estimated_time" time,
	"icon" uuid,
	"slug" varchar(255),
	"custom_fields" json,
	"name" varchar(255),
	"task_name" json,
	"gantt" json
);
--> statement-breakpoint
ALTER TABLE "projects" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipment_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"created_at" timestamp with time zone,
	"parent_id" integer,
	"comment" text,
	"entity_id" integer,
	"is_customer_notified" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "shipment_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "project_board_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_board_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "project_board_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipment_tracking" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone,
	"updated_at" timestamp with time zone,
	"entity_id" integer,
	"weight" integer,
	"qty" integer,
	"description" text,
	"track_number" integer,
	"title" varchar(255),
	"carrier_code" varchar(255),
	"parent_id" integer
);
--> statement-breakpoint
ALTER TABLE "shipment_tracking" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipping_address" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"customer_id" integer,
	"region_id" integer,
	"country_id" text,
	"street" text,
	"company" text,
	"telephone" text,
	"fax" text,
	"postcode" text,
	"city" text,
	"firstname" text,
	"lastname" text,
	"middlename" text,
	"prefix" text,
	"suffix" text,
	"vat_id" text,
	"default_shipping" boolean,
	"default_billing" boolean
);
--> statement-breakpoint
ALTER TABLE "shipping_address" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects_project_timeline" (
	"id" serial PRIMARY KEY NOT NULL,
	"projects_id" integer,
	"project_timeline_id" integer
);
--> statement-breakpoint
ALTER TABLE "projects_project_timeline" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "calendar_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"calendar_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "calendar_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipping_addresses_states" (
	"id" serial PRIMARY KEY NOT NULL,
	"shipping_addresses_id" integer,
	"states_id" integer
);
--> statement-breakpoint
ALTER TABLE "shipping_addresses_states" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"shops_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "shops_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"shops_id" integer,
	"comments_id" integer
);
--> statement-breakpoint
ALTER TABLE "shops_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"shops_id" integer,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "shops_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"shops_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "shops_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"shops_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "shops_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"content" text,
	"website" varchar(255),
	"type" json,
	"address" text,
	"rating" integer,
	"image" uuid,
	"description" text,
	"slug" varchar(255),
	"phone" varchar(255),
	"shipping_policy" text,
	"policies" json,
	"food_offered" varchar(255),
	"custom_domain" varchar(255),
	"theme" json,
	"trusted_score" json
);
--> statement-breakpoint
ALTER TABLE "shops" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "taxes_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"taxes_id" integer,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "taxes_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "taxes_states" (
	"id" serial PRIMARY KEY NOT NULL,
	"taxes_id" integer,
	"states_id" integer
);
--> statement-breakpoint
ALTER TABLE "taxes_states" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "user_profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"user" uuid,
	"display_name" varchar(255),
	"bio" text,
	"avatar" uuid,
	"location" varchar(255),
	"socials" json,
	"store" varchar(255),
	"age" integer
);
--> statement-breakpoint
ALTER TABLE "user_profile" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "translations_postgresstores" (
	"id" serial PRIMARY KEY NOT NULL,
	"translations_id" integer,
	"postgresstores_id" integer
);
--> statement-breakpoint
ALTER TABLE "translations_postgresstores" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "user_content_interaction" (
	"id" serial PRIMARY KEY NOT NULL,
	"date_created" timestamp with time zone,
	"interaction_type" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "user_content_interaction" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "tags_shorts" (
	"id" serial PRIMARY KEY NOT NULL,
	"tags_id" integer,
	"shorts_id" integer
);
--> statement-breakpoint
ALTER TABLE "tags_shorts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"shops_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "shops_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"shops_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "shops_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "videos_manufacturer" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"manufacturer_id" bigint
);
--> statement-breakpoint
ALTER TABLE "videos_manufacturer" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "videos_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "videos_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shorts_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"shorts_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "shorts_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"image" uuid,
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "tags" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"tags_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_tags" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_meta_Space" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "spaces_meta_Space" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"posts_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "states" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"country_code" varchar(255),
	"fips_code" varchar(255),
	"iso2" varchar(255),
	"latitude" numeric(10, 5),
	"longitude" numeric(10, 5),
	"flag" integer,
	"wikiDataId" varchar(255),
	"country_id" varchar(255),
	"created_at" timestamp with time zone,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "states" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "streams" (
	"id" serial PRIMARY KEY NOT NULL,
	"stream_id" integer,
	"stream_date" timestamp with time zone,
	"stream_duration" varchar(255),
	"stream_time" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "streams" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "states_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "states_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "tags_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"tags_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "tags_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "tags_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"tags_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "tags_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "spaces_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "brands" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP,
	"code" text,
	"name" text,
	"description" text,
	"image" uuid
);
--> statement-breakpoint
ALTER TABLE "brands" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "cart_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"cart_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "cart_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "brands_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"brands_id" bigint,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "brands_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "brands_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"brands_id" bigint,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "brands_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "brands_manufacturer" (
	"id" serial PRIMARY KEY NOT NULL,
	"brands_id" bigint,
	"manufacturer_id" bigint
);
--> statement-breakpoint
ALTER TABLE "brands_manufacturer" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "brands_shorts" (
	"id" serial PRIMARY KEY NOT NULL,
	"brands_id" bigint,
	"shorts_id" integer
);
--> statement-breakpoint
ALTER TABLE "brands_shorts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "categories_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"categories_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "categories_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"content" text,
	"image" uuid,
	"menus" json,
	"uid" varchar(255),
	"color" varchar(255),
	"colortext" varchar(255),
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "collections_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"collections_id" bigint,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "collections_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"response" text,
	"media" uuid,
	"name" varchar(255),
	"created_at" timestamp with time zone,
	"updated_at" timestamp with time zone,
	"helpful" boolean,
	"type" varchar(255),
	"ratings_breakdown" varchar(255),
	"average_rating" varchar(255),
	"nickname" varchar(255),
	"summary" text,
	"review_count" integer,
	"context_type" varchar(255),
	"message_type" varchar(255),
	"is_live" boolean,
	"user" uuid
);
--> statement-breakpoint
ALTER TABLE "comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "meilisearch_settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"host" varchar(255) DEFAULT NULL,
	"api_key" varchar(255) DEFAULT NULL,
	"collections_configuration" json DEFAULT '[]'::json
);
--> statement-breakpoint
ALTER TABLE "meilisearch_settings" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "comments_reactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"comments_id" integer,
	"reactions_id" integer
);
--> statement-breakpoint
ALTER TABLE "comments_reactions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "collections" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP,
	"name" text,
	"description" text,
	"image" uuid,
	"type" json
);
--> statement-breakpoint
ALTER TABLE "collections" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "connections" (
	"id" serial PRIMARY KEY NOT NULL,
	"date_created" timestamp with time zone,
	"name" varchar(255),
	"description" varchar(255),
	"connection_type" varchar(255),
	"user_a" varchar(255),
	"recipient" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "connections" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_extensions" (
	"enabled" boolean DEFAULT true NOT NULL,
	"id" uuid PRIMARY KEY NOT NULL,
	"folder" varchar(255) NOT NULL,
	"source" varchar(255) NOT NULL,
	"bundle" uuid
);
--> statement-breakpoint
ALTER TABLE "directus_extensions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_revisions" (
	"id" serial PRIMARY KEY NOT NULL,
	"activity" integer NOT NULL,
	"collection" varchar(64) NOT NULL,
	"item" varchar(255) NOT NULL,
	"data" json,
	"delta" json,
	"parent" integer,
	"version" uuid
);
--> statement-breakpoint
ALTER TABLE "directus_revisions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_presets" (
	"id" serial PRIMARY KEY NOT NULL,
	"bookmark" varchar(255),
	"user" uuid,
	"role" uuid,
	"collection" varchar(64),
	"search" varchar(100),
	"layout" varchar(100) DEFAULT 'tabular',
	"layout_query" json,
	"layout_options" json,
	"refresh_interval" integer,
	"filter" json,
	"icon" varchar(64) DEFAULT 'bookmark',
	"color" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "directus_presets" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_sessions" (
	"token" varchar(64) PRIMARY KEY NOT NULL,
	"user" uuid,
	"expires" timestamp with time zone NOT NULL,
	"ip" varchar(255),
	"user_agent" text,
	"share" uuid,
	"origin" varchar(255),
	"next_token" varchar(64)
);
--> statement-breakpoint
ALTER TABLE "directus_sessions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_roles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"icon" varchar(64) DEFAULT 'supervised_user_circle' NOT NULL,
	"description" text,
	"parent" uuid
);
--> statement-breakpoint
ALTER TABLE "directus_roles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"event_calendar" timestamp,
	"image" uuid,
	"location" varchar(255),
	"start_time" time,
	"end_time" time,
	"url" varchar(255),
	"postalcode" varchar(255),
	"type" varchar(255),
	"qr_code" varchar(255),
	"check_in" varchar(255),
	"rsvp_status" varchar(255),
	"rsvp_policies" json,
	"date" timestamp,
	"slug" varchar(255),
	"tickets_url" varchar(255),
	"address" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "events_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"email" varchar(128),
	"password" varchar(255),
	"location" varchar(255),
	"title" varchar(50),
	"description" text,
	"tags" json,
	"avatar" uuid,
	"language" varchar(255) DEFAULT NULL,
	"tfa_secret" varchar(255),
	"status" varchar(16) DEFAULT 'active' NOT NULL,
	"role" uuid,
	"token" varchar(255),
	"last_access" timestamp with time zone,
	"last_page" varchar(255),
	"provider" varchar(128) DEFAULT 'default' NOT NULL,
	"external_identifier" varchar(255),
	"auth_data" json,
	"email_notifications" boolean DEFAULT true,
	"appearance" varchar(255),
	"theme_dark" varchar(255),
	"theme_light" varchar(255),
	"theme_light_overrides" json,
	"theme_dark_overrides" json,
	"newsletter" boolean DEFAULT true,
	"text_direction" varchar(255) DEFAULT 'auto' NOT NULL,
	CONSTRAINT "directus_users_email_unique" UNIQUE("email"),
	CONSTRAINT "directus_users_token_unique" UNIQUE("token"),
	CONSTRAINT "directus_users_external_identifier_unique" UNIQUE("external_identifier")
);
--> statement-breakpoint
ALTER TABLE "directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "events_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "events_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "faqs" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"user_updated" uuid,
	"question" varchar(255),
	"answer" text,
	"creator" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "faqs" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "gamification_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"gamification_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "gamification_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "gamification_notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"gamification_id" integer,
	"notifications_id" integer
);
--> statement-breakpoint
ALTER TABLE "gamification_notifications" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "gamification_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"gamification_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "gamification_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "invoices_shipping_address" (
	"id" serial PRIMARY KEY NOT NULL,
	"invoice_id" bigint,
	"shipping_address_id" integer
);
--> statement-breakpoint
ALTER TABLE "invoices_shipping_address" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects_region" (
	"id" serial PRIMARY KEY NOT NULL,
	"projects_id" integer,
	"region_id" integer
);
--> statement-breakpoint
ALTER TABLE "projects_region" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"projects_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "projects_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "musicchart" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"image" uuid,
	"this_week" varchar(255),
	"last_week" varchar(255),
	"peak_position" varchar(255),
	"weeks_on_chart" varchar(255),
	"award" varchar(255),
	"color" varchar(255),
	"type" varchar(255),
	"creator" varchar(255),
	"previous_position" varchar(255),
	"first_appearance" varchar(255),
	"current_sales" varchar(255),
	"previous_sales" varchar(255),
	"trend" varchar(255),
	"seller" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "musicchart" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "region_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"region_id" integer,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "region_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "project_timeline" (
	"id" serial PRIMARY KEY NOT NULL,
	"stage" json
);
--> statement-breakpoint
ALTER TABLE "project_timeline" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "address_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"address_id" integer,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "address_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "agreements_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "agreements_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "articles_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"articles_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "articles_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "articles_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"articles_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "articles_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "product_types_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_types_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "product_types_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "circles_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "circles_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "connections_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"connections_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "connections_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "navigation_pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"navigation_id" integer,
	"pages_id" integer
);
--> statement-breakpoint
ALTER TABLE "navigation_pages" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "subscriptions_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"subscriptions_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "subscriptions_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "cart" (
	"id" serial PRIMARY KEY NOT NULL,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"session_id" uuid,
	"total_price" real,
	"user" uuid,
	"status" varchar(255),
	"subtotal" integer,
	"tax_amount" integer,
	"shipping_amount" integer,
	"discount_amount" integer,
	"total" integer,
	"currency" varchar(255),
	"coupon_code" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "cart" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "attributes" (
	"id" serial PRIMARY KEY NOT NULL,
	"default_label" text,
	"isPublic" boolean,
	"options" json,
	"attribute_code" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "attributes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "attributes_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"attributes_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "attributes_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "page_blocks" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"content" json,
	"menus" json
);
--> statement-breakpoint
ALTER TABLE "page_blocks" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"content" text,
	"is_read" boolean,
	"image" uuid,
	"payload" json,
	"type" varchar(255),
	"recipient" uuid
);
--> statement-breakpoint
ALTER TABLE "notifications" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "order_items_orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_items_id" integer,
	"orders_id" integer
);
--> statement-breakpoint
ALTER TABLE "order_items_orders" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "payments_orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"payments_id" integer,
	"orders_id" integer
);
--> statement-breakpoint
ALTER TABLE "payments_orders" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "redirects" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"response_code" integer,
	"url_new" varchar(255),
	"url_old" varchar(255),
	"notice_redirects" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "redirects" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "postgresstores_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"postgresstores_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "postgresstores_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_attributes" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"attributes_id" integer
);
--> statement-breakpoint
ALTER TABLE "products_attributes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "profiles_followers" (
	"id" serial PRIMARY KEY NOT NULL,
	"profiles_id" uuid,
	"followers_id" integer
);
--> statement-breakpoint
ALTER TABLE "profiles_followers" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "products_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint,
	"tags_id" integer
);
--> statement-breakpoint
ALTER TABLE "products_tags" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "radios_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"radios_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "radios_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "ratings" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"description" text,
	"image" uuid
);
--> statement-breakpoint
ALTER TABLE "ratings" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "related_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"sort" integer,
	"user" uuid
);
--> statement-breakpoint
ALTER TABLE "related_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "reactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"content_id" varchar(255),
	"content_type" varchar(255),
	"posts" integer,
	"user_id" uuid,
	"list_id" integer,
	"space_id" integer,
	"video_id" integer,
	"product" bigint,
	"user" uuid,
	"counter" integer,
	"image" uuid,
	"name" varchar(255),
	"icon" varchar(255),
	"target_type" varchar(255),
	"interaction_type" varchar(255),
	"reaction_type" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "reactions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "credit_memos" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone,
	"updated_at" timestamp with time zone,
	"adjustment" integer,
	"adjustment_negative" integer,
	"adjustment_positive" integer,
	"base_adjustment" integer,
	"base_adjustment_negative" integer,
	"base_adjustment_positive" integer,
	"base_currency_code" text,
	"base_discount_amount" integer,
	"base_grand_total" integer,
	"base_discount_tax_compensation_amount" integer,
	"base_shipping_amount" integer,
	"base_shipping_discount_tax_compensation_amnt" integer,
	"base_shipping_incl_tax" integer,
	"base_shipping_tax_amount" integer,
	"base_subtotal" integer,
	"base_subtotal_incl_tax" integer,
	"base_tax_amount" integer,
	"base_to_global_rate" integer,
	"base_to_order_rate" integer,
	"creditmemo_status" integer,
	"discount_amount" integer,
	"discount_description" text,
	"email_sent" integer,
	"entity_id" integer,
	"global_currency_code" text,
	"grand_total" integer,
	"discount_tax_compensation_amount" integer,
	"increment_id" text,
	"invoice_id" integer,
	"order_currency_code" text,
	"shipping_amount" integer,
	"shipping_discount_tax_compensation_amount" integer,
	"shipping_incl_tax" integer,
	"shipping_tax_amount" integer,
	"state" integer,
	"store_currency_code" text,
	"store_id" integer,
	"store_to_base_rate" integer,
	"store_to_order_rate" integer,
	"subtotal" integer,
	"subtotal_incl_tax" integer,
	"tax_amount" integer,
	"user" uuid
);
--> statement-breakpoint
ALTER TABLE "credit_memos" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_flows" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"icon" varchar(64),
	"color" varchar(255),
	"description" text,
	"status" varchar(255) DEFAULT 'active' NOT NULL,
	"trigger" varchar(255),
	"accountability" varchar(255) DEFAULT 'all',
	"options" json,
	"operation" uuid,
	"date_created" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"user_created" uuid,
	CONSTRAINT "directus_flows_operation_unique" UNIQUE("operation")
);
--> statement-breakpoint
ALTER TABLE "directus_flows" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "cross_sell_products_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"cross_sell_products_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "cross_sell_products_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"timestamp" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"status" varchar(255) DEFAULT 'inbox',
	"recipient" uuid NOT NULL,
	"sender" uuid,
	"subject" varchar(255) NOT NULL,
	"message" text,
	"collection" varchar(64),
	"item" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "directus_notifications" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_dashboards" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"icon" varchar(64) DEFAULT 'dashboard' NOT NULL,
	"note" text,
	"date_created" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"user_created" uuid,
	"color" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "directus_dashboards" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "region_address" (
	"id" serial PRIMARY KEY NOT NULL,
	"region_id" integer,
	"address_id" integer
);
--> statement-breakpoint
ALTER TABLE "region_address" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "products" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"sku" bigint,
	"name" text,
	"tax_class" text,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP,
	"content" text,
	"part_number" text,
	"file" uuid,
	"image" uuid,
	"visibility" boolean,
	"stock" integer,
	"rating" integer,
	"salable_quantity" bigint,
	"updated_at" timestamp with time zone,
	"status" varchar(255),
	"price" numeric(10, 5),
	"ratings" varchar(255) DEFAULT '0'
);
--> statement-breakpoint
ALTER TABLE "products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "report" (
	"id" serial PRIMARY KEY NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"title" varchar(255),
	"content" text
);
--> statement-breakpoint
ALTER TABLE "report" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipment_address" (
	"id" serial PRIMARY KEY NOT NULL,
	"shipment_id" integer,
	"address_id" integer
);
--> statement-breakpoint
ALTER TABLE "shipment_address" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "returns" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"return_number" uuid,
	"reason" text
);
--> statement-breakpoint
ALTER TABLE "returns" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "returns_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"returns_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "returns_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "seasons" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"description" text,
	"release_date" timestamp,
	"number" integer,
	"name" integer
);
--> statement-breakpoint
ALTER TABLE "seasons" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipping_addresses" (
	"id" serial PRIMARY KEY NOT NULL,
	"street" varchar(255),
	"zipcode" varchar(255),
	"phone" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "shipping_addresses" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "events_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipping_addresses_cities" (
	"id" serial PRIMARY KEY NOT NULL,
	"shipping_addresses_id" integer,
	"cities_id" integer
);
--> statement-breakpoint
ALTER TABLE "shipping_addresses_cities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shipping_addresses_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"shipping_addresses_id" integer,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "shipping_addresses_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops_agreements" (
	"id" serial PRIMARY KEY NOT NULL,
	"shops_id" integer
);
--> statement-breakpoint
ALTER TABLE "shops_agreements" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shops_showcases" (
	"id" serial PRIMARY KEY NOT NULL,
	"shops_id" integer,
	"showcases_id" integer
);
--> statement-breakpoint
ALTER TABLE "shops_showcases" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shorts_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"shorts_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "shorts_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "federated_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"activitypub_url" varchar(255),
	"syndication_type" varchar(255),
	"last_synced" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "federated_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "site_preference_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "site_preference_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "site_preference_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "site_preference_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'open',
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"order" integer,
	"payment_method" varchar(255),
	"transactions_parent_id" varchar(255),
	"type" varchar(255),
	"amount" numeric(10, 5)
);
--> statement-breakpoint
ALTER TABLE "transactions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "list_products_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"list_products_id" integer,
	"lists_id" integer
);
--> statement-breakpoint
ALTER TABLE "list_products_lists" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "payments_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"payment_id" integer,
	"country_id" integer
);
--> statement-breakpoint
ALTER TABLE "payments_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "musicchart_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "musicchart_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "lists_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "meeovistores" (
	"id" serial PRIMARY KEY NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"content" text,
	"color" varchar(255),
	"colortext" varchar(255),
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "meeovistores" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "navigation" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar(255),
	"name" varchar(255),
	"url" varchar(255),
	"image" uuid,
	"submenus" json,
	"menus" json,
	"description" text,
	"color" varchar(255),
	"colortext" varchar(255),
	"custom_tabs" json
);
--> statement-breakpoint
ALTER TABLE "navigation" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"subscription_number" uuid,
	"start_date" date,
	"end_date" date
);
--> statement-breakpoint
ALTER TABLE "subscriptions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "showcases" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'published',
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"color" varchar(255),
	"colortext" varchar(255),
	"image" uuid,
	"thumbnail" uuid,
	"rating" varchar(255),
	"slug" varchar(255),
	"owner" uuid,
	"type" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "showcases" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "subscriptions_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"subscriptions_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "subscriptions_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "states_cities" (
	"id" serial PRIMARY KEY NOT NULL,
	"states_id" integer,
	"cities_id" integer
);
--> statement-breakpoint
ALTER TABLE "states_cities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "postgresstores" (
	"id" serial PRIMARY KEY NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"content" text,
	"image" uuid,
	"color" varchar(255),
	"colortext" varchar(255),
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "postgresstores" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "streams_ratings" (
	"id" serial PRIMARY KEY NOT NULL,
	"streams_id" integer,
	"ratings_id" integer
);
--> statement-breakpoint
ALTER TABLE "streams_ratings" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "tags_articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"tags_id" integer,
	"articles_id" integer
);
--> statement-breakpoint
ALTER TABLE "tags_articles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "tags_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"tags_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "tags_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "taxes" (
	"id" serial PRIMARY KEY NOT NULL,
	"rate" numeric(10, 5),
	"tax_class" varchar(255),
	"certifications" json,
	"age_gating" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "taxes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "translations" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"url" varchar(255),
	"image" uuid,
	"code" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "translations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "calendar_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"calendar_id" integer,
	"lists_id" integer
);
--> statement-breakpoint
ALTER TABLE "calendar_lists" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
ALTER TABLE "lists_files" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"projects_id" integer,
	"lists_id" integer
);
--> statement-breakpoint
ALTER TABLE "projects_lists" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "videos_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"comments_id" integer
);
--> statement-breakpoint
ALTER TABLE "videos_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "departments_showcases" (
	"id" serial PRIMARY KEY NOT NULL,
	"departments_id" integer,
	"showcases_id" integer
);
--> statement-breakpoint
ALTER TABLE "departments_showcases" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "chat" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"image" uuid,
	"message" text
);
--> statement-breakpoint
ALTER TABLE "chat" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "about_departments_platform" (
	"id" serial PRIMARY KEY NOT NULL,
	"platform_id" integer
);
--> statement-breakpoint
ALTER TABLE "about_departments_platform" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "profiles_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"profiles_id" uuid,
	"countries_id" integer
);
--> statement-breakpoint
ALTER TABLE "profiles_countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "profiles_states" (
	"id" serial PRIMARY KEY NOT NULL,
	"profiles_id" uuid,
	"states_id" integer
);
--> statement-breakpoint
ALTER TABLE "profiles_states" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "project_board" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"cards" json,
	"progress" integer,
	"custom_fields" json
);
--> statement-breakpoint
ALTER TABLE "project_board" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "collections_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"collections_id" bigint,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "collections_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_template" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"title" varchar(255),
	"visibility" varchar(255),
	"icon" varchar(255),
	"theme" varchar(255),
	"description" text,
	"type" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "lists_template" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "templates" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"title" varchar(255),
	"description" text,
	"default_tabs" varchar(255),
	"default_types" varchar(255),
	"default_roles" varchar(255),
	"default_content" varchar(255),
	"theme" json,
	"template_type" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "templates" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "project_board_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_board_id" integer,
	"comments_id" integer
);
--> statement-breakpoint
ALTER TABLE "project_board_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "chart_entries" (
	"id" serial PRIMARY KEY NOT NULL,
	"chart_id" integer,
	"product_id" bigint,
	"position" integer,
	"last_position" integer,
	"streams" integer,
	"sales" integer,
	"score" real,
	"this_week" varchar(255),
	"last_week" varchar(255),
	"peak_position" varchar(255),
	"weeks_on_chart" varchar(255),
	"award" varchar(255),
	"color" varchar(255),
	"trend" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "chart_entries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "merch_recipes" (
	"id" serial PRIMARY KEY NOT NULL,
	"department_id" integer,
	"inputs_json" jsonb,
	"constraints_json" jsonb,
	"output_slots" jsonb,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "merch_recipes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "media_folders_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"media_folders_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
CREATE TABLE "shorts_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"shorts_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "shorts_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_platform" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"platform_id" integer
);
--> statement-breakpoint
ALTER TABLE "integrations_platform" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "geo_regions_cities" (
	"id" serial PRIMARY KEY NOT NULL,
	"geo_regions_id" integer,
	"cities_id" integer
);
--> statement-breakpoint
CREATE TABLE "geo_regions_states" (
	"id" serial PRIMARY KEY NOT NULL,
	"geo_regions_id" integer,
	"states_id" integer
);
--> statement-breakpoint
CREATE TABLE "user_friends" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"user" uuid,
	"friend" uuid,
	"created_at" timestamp with time zone,
	"relation" json
);
--> statement-breakpoint
ALTER TABLE "user_friends" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "websites" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP,
	"name" text,
	"url" text,
	"image" uuid,
	"type" varchar(255),
	"slug" varchar(255),
	"icon" varchar(255),
	"status" varchar(255),
	"note" text,
	"username" varchar(255),
	"description" text,
	"creator" uuid
);
--> statement-breakpoint
ALTER TABLE "websites" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"projects_id" integer,
	"comments_id" integer
);
--> statement-breakpoint
ALTER TABLE "projects_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_templates" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_id" integer,
	"templates_id" integer
);
--> statement-breakpoint
ALTER TABLE "lists_templates" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "videos_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"tags_id" integer
);
--> statement-breakpoint
ALTER TABLE "videos_tags" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "geo_regions_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"geo_regions_id" integer,
	"countries_id" integer
);
--> statement-breakpoint
CREATE TABLE "videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"type" varchar(255),
	"description" text,
	"ratings" integer,
	"name" varchar(255),
	"media" uuid,
	"thumbnail" uuid,
	"video_url" varchar(255),
	"user" uuid,
	"minio_key" varchar(255),
	"duration" varchar(255),
	"visibility" varchar(255),
	"view_count" integer,
	"distributor" integer
);
--> statement-breakpoint
ALTER TABLE "videos" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "countries_currency" (
	"id" serial PRIMARY KEY NOT NULL,
	"countries_id" integer,
	"currency_id" integer
);
--> statement-breakpoint
ALTER TABLE "countries_currency" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "timezones" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"code" varchar(255),
	"description" text
);
--> statement-breakpoint
ALTER TABLE "timezones" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects_calendar" (
	"id" serial PRIMARY KEY NOT NULL,
	"projects_id" integer,
	"calendar_id" integer
);
--> statement-breakpoint
ALTER TABLE "projects_calendar" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"tags_id" integer
);
--> statement-breakpoint
ALTER TABLE "integrations_tags" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "integrations_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_template_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_template_id" integer,
	"tags_id" integer
);
--> statement-breakpoint
ALTER TABLE "lists_template_tags" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "about_departments_pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"pages_id" integer
);
--> statement-breakpoint
ALTER TABLE "about_departments_pages" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "about_departments_articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"articles_id" integer
);
--> statement-breakpoint
ALTER TABLE "about_departments_articles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "tags_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"tags_id" integer,
	"posts_id" integer
);
--> statement-breakpoint
ALTER TABLE "tags_posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_attributes" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"attributes_id" integer
);
--> statement-breakpoint
ALTER TABLE "integrations_attributes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "profiles_cities" (
	"id" serial PRIMARY KEY NOT NULL,
	"profiles_id" uuid,
	"cities_id" integer
);
--> statement-breakpoint
ALTER TABLE "profiles_cities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations_product_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"integrations_id" integer,
	"product_types_id" integer
);
--> statement-breakpoint
ALTER TABLE "integrations_product_types" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "events_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer,
	"posts_id" integer
);
--> statement-breakpoint
ALTER TABLE "events_posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"lists_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_lists" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "polls_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"polls_id" integer,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "polls_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "polls" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"slug" varchar(255),
	"isPublic" boolean,
	"content" json,
	"image" uuid,
	"author" uuid
);
--> statement-breakpoint
ALTER TABLE "polls" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "member_groups_space_members" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "member_groups_space_members" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_live_rooms" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "spaces_live_rooms" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "list_items_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"list_items_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "list_items_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "calendar_integrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"calendar_id" integer,
	"integrations_id" integer
);
--> statement-breakpoint
ALTER TABLE "calendar_integrations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects_integrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"projects_id" integer,
	"integrations_id" integer
);
--> statement-breakpoint
ALTER TABLE "projects_integrations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"projects_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "projects_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "calendar_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"calendar_id" integer,
	"comments_id" integer
);
--> statement-breakpoint
ALTER TABLE "calendar_comments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "calendar" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"day" integer,
	"month" json,
	"year" integer,
	"image" uuid,
	"status" boolean,
	"description" text,
	"favorite" boolean,
	"facebook_id" varchar(255),
	"google_id" varchar(255),
	"appointment" json
);
--> statement-breakpoint
ALTER TABLE "calendar" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "calendar_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"calendar_id" integer,
	"events_id" integer
);
--> statement-breakpoint
ALTER TABLE "calendar_events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "member_groups_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"posts_id" integer
);
--> statement-breakpoint
ALTER TABLE "member_groups_posts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "member_groups_polls" (
	"id" serial PRIMARY KEY NOT NULL,
	"polls_id" integer
);
--> statement-breakpoint
ALTER TABLE "member_groups_polls" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "member_groups_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" integer
);
--> statement-breakpoint
ALTER TABLE "member_groups_events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "member_groups_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "member_groups_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "integrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"url" varchar(255),
	"commands" varchar(255),
	"description" text,
	"version" varchar(255),
	"developer" varchar(255),
	"is_cost" varchar(255),
	"system_requirements" json,
	"publisher_info" text,
	"warnings" text,
	"disclaimers" text,
	"terms" text,
	"permissions" text,
	"type" varchar(255),
	"ratings" varchar(255),
	"price" real,
	"features" json
);
--> statement-breakpoint
ALTER TABLE "integrations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "showcases_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"showcases_id" integer,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "showcases_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "product_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"isShippable" boolean,
	"options" json
);
--> statement-breakpoint
ALTER TABLE "product_types" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "attributes_product_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"attributes_id" integer,
	"product_types_id" integer
);
--> statement-breakpoint
ALTER TABLE "attributes_product_types" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "product_attributes" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" bigint,
	"attribute_id" integer,
	"value" json
);
--> statement-breakpoint
ALTER TABLE "product_attributes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_type_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_type_id" integer,
	"lists_id" integer
);
--> statement-breakpoint
ALTER TABLE "lists_type_lists" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"visibility" varchar(255),
	"category" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "lists_type" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_type_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_type_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "lists_type_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "charts_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"charts_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "charts_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "charts_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"charts_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "charts_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "lists_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "charts_radios" (
	"id" serial PRIMARY KEY NOT NULL,
	"charts_id" integer,
	"radios_id" integer
);
--> statement-breakpoint
ALTER TABLE "charts_radios" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "charts" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" varchar(255),
	"slug" varchar(255),
	"type" varchar(255),
	"icon" uuid,
	"date" date
);
--> statement-breakpoint
ALTER TABLE "charts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "lists_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_shorts" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_id" integer,
	"shorts_id" integer
);
--> statement-breakpoint
ALTER TABLE "lists_shorts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "videos_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
ALTER TABLE "videos_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "spaces_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"spaces_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "spaces_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "videos_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
ALTER TABLE "videos_departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "videos_product_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"product_types_id" integer
);
--> statement-breakpoint
ALTER TABLE "videos_product_types" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shop_type_shops" (
	"id" serial PRIMARY KEY NOT NULL,
	"shop_type_id" integer,
	"shops_id" integer
);
--> statement-breakpoint
ALTER TABLE "shop_type_shops" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "shop_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"date_created" timestamp with time zone,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text
);
--> statement-breakpoint
ALTER TABLE "shop_type" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "auction_lots" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"product_id" bigint,
	"reserve_price" numeric,
	"start_at" timestamp with time zone,
	"end_at" timestamp with time zone,
	"anti_snipe_sec" integer,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "auction_lots" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "variants" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer,
	"sku" text,
	"options_json" jsonb,
	"price" numeric,
	"cost" numeric,
	"barcode" text,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "variants" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "inventory_lots" (
	"id" serial PRIMARY KEY NOT NULL,
	"location_id" integer,
	"qty" integer,
	"batch" text,
	"expires_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "inventory_lots" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "vibez_clips" (
	"id" serial PRIMARY KEY NOT NULL,
	"creator_id" integer,
	"media_url" text,
	"duration" integer,
	"captions" text,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "vibez_clips" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "engagement_signals" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_type" text,
	"entity_id" integer,
	"signal_type" text,
	"weight" numeric,
	"ts" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "engagement_signals" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "showcases_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"showcases_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
ALTER TABLE "showcases_products" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "directus_settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_name" varchar(100) DEFAULT 'Directus' NOT NULL,
	"project_url" varchar(255),
	"project_color" varchar(255) DEFAULT '#6644FF' NOT NULL,
	"project_logo" uuid,
	"public_foreground" uuid,
	"public_background" uuid,
	"public_note" text,
	"auth_login_attempts" integer DEFAULT 25,
	"auth_password_policy" varchar(100),
	"storage_asset_transform" varchar(7) DEFAULT 'all',
	"storage_asset_presets" json,
	"custom_css" text,
	"storage_default_folder" uuid,
	"basemaps" json,
	"mapbox_key" varchar(255),
	"module_bar" json,
	"project_descriptor" varchar(100),
	"default_language" varchar(255) DEFAULT 'en-US' NOT NULL,
	"custom_aspect_ratios" json,
	"public_favicon" uuid,
	"default_appearance" varchar(255) DEFAULT 'auto' NOT NULL,
	"default_theme_light" varchar(255),
	"theme_light_overrides" json,
	"default_theme_dark" varchar(255),
	"theme_dark_overrides" json,
	"report_error_url" varchar(255),
	"report_bug_url" varchar(255),
	"report_feature_url" varchar(255),
	"public_registration" boolean DEFAULT false NOT NULL,
	"public_registration_verify_email" boolean DEFAULT true NOT NULL,
	"public_registration_role" uuid,
	"public_registration_email_filter" json,
	"visual_editor_urls" json,
	"project_id" uuid,
	"mcp_enabled" boolean DEFAULT false NOT NULL,
	"mcp_allow_deletes" boolean DEFAULT false NOT NULL,
	"mcp_prompts_collection" varchar(255) DEFAULT NULL,
	"mcp_system_prompt_enabled" boolean DEFAULT true NOT NULL,
	"mcp_system_prompt" text,
	"project_owner" varchar(255),
	"project_usage" varchar(255),
	"org_name" varchar(255),
	"product_updates" boolean,
	"project_status" varchar(255),
	"ai_openai_api_key" text,
	"ai_anthropic_api_key" text,
	"ai_system_prompt" text
);
--> statement-breakpoint
ALTER TABLE "directus_settings" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_template_directus_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_template_id" integer,
	"directus_users_id" uuid
);
--> statement-breakpoint
ALTER TABLE "lists_template_directus_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "lists_template_list_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"lists_template_id" integer,
	"list_items_id" integer
);
--> statement-breakpoint
ALTER TABLE "lists_template_list_items" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "federated_spaces_spaces" (
	"id" serial PRIMARY KEY NOT NULL,
	"federated_spaces_id" integer,
	"spaces_id" integer
);
--> statement-breakpoint
ALTER TABLE "federated_spaces_spaces" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "bids" (
	"id" serial PRIMARY KEY NOT NULL,
	"lot_id" integer,
	"bidder_id" integer,
	"amount" numeric,
	"ts" timestamp with time zone DEFAULT now(),
	"status" text
);
--> statement-breakpoint
ALTER TABLE "bids" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "department_channels" (
	"id" serial PRIMARY KEY NOT NULL,
	"department_id" integer,
	"rules_json" jsonb,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "department_channels" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "geo_regions" (
	"id" serial PRIMARY KEY NOT NULL,
	"delivery_sla" text,
	"created_at" timestamp with time zone DEFAULT now(),
	"name" varchar(255),
	"slug" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "geo_regions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"name" varchar(255),
	"description" text,
	"user" uuid,
	"profile_id" uuid
);
--> statement-breakpoint
CREATE TABLE "media_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"media_id" integer,
	"directus_files_id" uuid
);
--> statement-breakpoint
CREATE TABLE "vibez_product_map" (
	"clip_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	CONSTRAINT "vibez_product_map_pkey" PRIMARY KEY("clip_id","product_id")
);
--> statement-breakpoint
ALTER TABLE "vibez_product_map" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_cover_image_foreign" FOREIGN KEY ("cover_image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_owner_foreign" FOREIGN KEY ("owner") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_shop_type" ADD CONSTRAINT "spaces_shop_type_shop_type_id_foreign" FOREIGN KEY ("shop_type_id") REFERENCES "public"."shop_type"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_shop_type" ADD CONSTRAINT "spaces_shop_type_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments_spaces" ADD CONSTRAINT "moments_spaces_moments_id_foreign" FOREIGN KEY ("moments_id") REFERENCES "public"."moments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments_spaces" ADD CONSTRAINT "moments_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_templates" ADD CONSTRAINT "spaces_templates_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_templates" ADD CONSTRAINT "spaces_templates_templates_id_foreign" FOREIGN KEY ("templates_id") REFERENCES "public"."templates"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_shops" ADD CONSTRAINT "showcases_shops_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_shops" ADD CONSTRAINT "showcases_shops_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_cart" ADD CONSTRAINT "address_cart_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_cart" ADD CONSTRAINT "address_cart_cart_id_foreign" FOREIGN KEY ("cart_id") REFERENCES "public"."cart"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_comments" ADD CONSTRAINT "articles_comments_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_comments" ADD CONSTRAINT "articles_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders" ADD CONSTRAINT "media_folders_parent_folder_foreign" FOREIGN KEY ("parent_folder") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders" ADD CONSTRAINT "media_folders_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders" ADD CONSTRAINT "media_folders_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders" ADD CONSTRAINT "media_folders_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seasons_videos" ADD CONSTRAINT "seasons_videos_seasons_id_foreign" FOREIGN KEY ("seasons_id") REFERENCES "public"."seasons"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seasons_videos" ADD CONSTRAINT "seasons_videos_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_cities" ADD CONSTRAINT "spaces_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_cities" ADD CONSTRAINT "spaces_cities_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_audio_foreign" FOREIGN KEY ("audio") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_foreign" FOREIGN KEY ("author") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "countries_timezones" ADD CONSTRAINT "countries_timezones_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "countries_timezones" ADD CONSTRAINT "countries_timezones_timezones_id_foreign" FOREIGN KEY ("timezones_id") REFERENCES "public"."timezones"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_articles" ADD CONSTRAINT "spaces_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_articles" ADD CONSTRAINT "spaces_articles_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_states" ADD CONSTRAINT "spaces_states_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_states" ADD CONSTRAINT "spaces_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_countries" ADD CONSTRAINT "spaces_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_countries" ADD CONSTRAINT "spaces_countries_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_products" ADD CONSTRAINT "brands_products_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_products" ADD CONSTRAINT "brands_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cities_countries" ADD CONSTRAINT "cities_countries_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_cart_items" ADD CONSTRAINT "cart_cart_items_cart_id_foreign" FOREIGN KEY ("cart_id") REFERENCES "public"."cart"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_cart_items" ADD CONSTRAINT "cart_cart_items_cart_items_id_foreign" FOREIGN KEY ("cart_items_id") REFERENCES "public"."cart_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "templates_space_types" ADD CONSTRAINT "templates_space_types_space_types_id_foreign" FOREIGN KEY ("space_types_id") REFERENCES "public"."space_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "templates_space_types" ADD CONSTRAINT "templates_space_types_templates_id_foreign" FOREIGN KEY ("templates_id") REFERENCES "public"."templates"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "space_types" ADD CONSTRAINT "space_types_icon_foreign" FOREIGN KEY ("icon") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_directus_users" ADD CONSTRAINT "project_board_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_directus_users" ADD CONSTRAINT "project_board_directus_users_project_board_id_foreign" FOREIGN KEY ("project_board_id") REFERENCES "public"."project_board"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts_polls" ADD CONSTRAINT "posts_polls_polls_id_foreign" FOREIGN KEY ("polls_id") REFERENCES "public"."polls"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts_polls" ADD CONSTRAINT "posts_polls_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform" ADD CONSTRAINT "platform_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives" ADD CONSTRAINT "incentives_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_currency" ADD CONSTRAINT "incentives_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_currency" ADD CONSTRAINT "incentives_currency_incentives_id_foreign" FOREIGN KEY ("incentives_id") REFERENCES "public"."incentives"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "coupons_products" ADD CONSTRAINT "coupons_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_sell_products" ADD CONSTRAINT "cross_sell_products_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments_products" ADD CONSTRAINT "moments_products_moments_id_foreign" FOREIGN KEY ("moments_id") REFERENCES "public"."moments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments_products" ADD CONSTRAINT "moments_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_space_types" ADD CONSTRAINT "spaces_space_types_space_types_id_foreign" FOREIGN KEY ("space_types_id") REFERENCES "public"."space_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_space_types" ADD CONSTRAINT "spaces_space_types_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_directus_users" ADD CONSTRAINT "projects_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_directus_users" ADD CONSTRAINT "projects_directus_users_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_cities" ADD CONSTRAINT "address_cities_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_cities" ADD CONSTRAINT "address_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_prompts" ADD CONSTRAINT "ai_prompts_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_prompts" ADD CONSTRAINT "ai_prompts_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Space_products" ADD CONSTRAINT "space_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_products" ADD CONSTRAINT "platform_products_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_products" ADD CONSTRAINT "platform_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles" ADD CONSTRAINT "articles_author_foreign" FOREIGN KEY ("author") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_directus_users" ADD CONSTRAINT "address_directus_users_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_region" ADD CONSTRAINT "finance_index_region_finance_index_id_foreign" FOREIGN KEY ("finance_index_id") REFERENCES "public"."finance_index"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_region" ADD CONSTRAINT "finance_index_region_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_cart_foreign" FOREIGN KEY ("cart") REFERENCES "public"."cart"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_products_foreign" FOREIGN KEY ("products") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_currency" ADD CONSTRAINT "finance_index_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_currency" ADD CONSTRAINT "finance_index_currency_finance_index_id_foreign" FOREIGN KEY ("finance_index_id") REFERENCES "public"."finance_index"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cities_states" ADD CONSTRAINT "cities_states_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_directus_users" ADD CONSTRAINT "comments_directus_users_comment_id_foreign" FOREIGN KEY ("comment_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_brands" ADD CONSTRAINT "collections_brands_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_brands" ADD CONSTRAINT "collections_brands_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_products" ADD CONSTRAINT "comments_products_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_products" ADD CONSTRAINT "comments_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_shorts" ADD CONSTRAINT "comments_shorts_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_shorts" ADD CONSTRAINT "comments_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_shorts" ADD CONSTRAINT "categories_shorts_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_shorts" ADD CONSTRAINT "categories_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_postgresstores" ADD CONSTRAINT "categories_postgresstores_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_postgresstores" ADD CONSTRAINT "categories_postgresstores_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "currency_departments" ADD CONSTRAINT "currency_departments_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "currency_departments" ADD CONSTRAINT "currency_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_access" ADD CONSTRAINT "directus_access_policy_foreign" FOREIGN KEY ("policy") REFERENCES "public"."directus_policies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_access" ADD CONSTRAINT "directus_access_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_access" ADD CONSTRAINT "directus_access_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_categories" ADD CONSTRAINT "departments_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_categories" ADD CONSTRAINT "departments_categories_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_collections" ADD CONSTRAINT "departments_collections_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_collections" ADD CONSTRAINT "departments_collections_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_products" ADD CONSTRAINT "departments_products_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_products" ADD CONSTRAINT "departments_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_comments" ADD CONSTRAINT "directus_comments_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_comments" ADD CONSTRAINT "directus_comments_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_shorts" ADD CONSTRAINT "departments_shorts_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_shorts" ADD CONSTRAINT "departments_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_categories" ADD CONSTRAINT "platform_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_categories" ADD CONSTRAINT "platform_categories_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_lists" ADD CONSTRAINT "events_lists_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_lists" ADD CONSTRAINT "events_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_invoices" ADD CONSTRAINT "events_invoices_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_invoices" ADD CONSTRAINT "events_invoices_invoices_id_foreign" FOREIGN KEY ("invoices_id") REFERENCES "public"."invoices"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_collections" ADD CONSTRAINT "directus_collections_group_foreign" FOREIGN KEY ("group") REFERENCES "public"."directus_collections"("collection") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_flow_foreign" FOREIGN KEY ("flow") REFERENCES "public"."directus_flows"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_reject_foreign" FOREIGN KEY ("reject") REFERENCES "public"."directus_operations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_resolve_foreign" FOREIGN KEY ("resolve") REFERENCES "public"."directus_operations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_pages" ADD CONSTRAINT "platform_pages_pages_id_foreign" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_pages" ADD CONSTRAINT "platform_pages_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_files" ADD CONSTRAINT "directus_files_folder_foreign" FOREIGN KEY ("folder") REFERENCES "public"."directus_folders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_files" ADD CONSTRAINT "directus_files_modified_by_foreign" FOREIGN KEY ("modified_by") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_files" ADD CONSTRAINT "directus_files_uploaded_by_foreign" FOREIGN KEY ("uploaded_by") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_folders" ADD CONSTRAINT "directus_folders_parent_foreign" FOREIGN KEY ("parent") REFERENCES "public"."directus_folders"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_panels" ADD CONSTRAINT "directus_panels_dashboard_foreign" FOREIGN KEY ("dashboard") REFERENCES "public"."directus_dashboards"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_panels" ADD CONSTRAINT "directus_panels_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_lists" ADD CONSTRAINT "platform_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_lists" ADD CONSTRAINT "platform_lists_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_videos" ADD CONSTRAINT "gamification_videos_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_videos" ADD CONSTRAINT "gamification_videos_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_departments" ADD CONSTRAINT "integrations_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_departments" ADD CONSTRAINT "integrations_departments_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_ratings" ADD CONSTRAINT "integrations_ratings_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_ratings" ADD CONSTRAINT "integrations_ratings_ratings_id_foreign" FOREIGN KEY ("ratings_id") REFERENCES "public"."ratings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_files" ADD CONSTRAINT "integrations_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_files" ADD CONSTRAINT "integrations_files_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions_currency" ADD CONSTRAINT "transactions_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions_currency" ADD CONSTRAINT "transactions_currency_transactions_id_foreign" FOREIGN KEY ("transactions_id") REFERENCES "public"."transactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_permissions" ADD CONSTRAINT "directus_permissions_policy_foreign" FOREIGN KEY ("policy") REFERENCES "public"."directus_policies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_navigation" ADD CONSTRAINT "platform_navigation_navigation_id_foreign" FOREIGN KEY ("navigation_id") REFERENCES "public"."navigation"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_navigation" ADD CONSTRAINT "platform_navigation_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_webhooks" ADD CONSTRAINT "directus_webhooks_migrated_flow_foreign" FOREIGN KEY ("migrated_flow") REFERENCES "public"."directus_flows"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_orders" ADD CONSTRAINT "incentives_orders_incentives_id_foreign" FOREIGN KEY ("incentives_id") REFERENCES "public"."incentives"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_orders" ADD CONSTRAINT "incentives_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_shares" ADD CONSTRAINT "directus_shares_collection_foreign" FOREIGN KEY ("collection") REFERENCES "public"."directus_collections"("collection") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_shares" ADD CONSTRAINT "directus_shares_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_shares" ADD CONSTRAINT "directus_shares_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_spaces" ADD CONSTRAINT "report_spaces_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_spaces" ADD CONSTRAINT "report_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items_products" ADD CONSTRAINT "list_items_products_list_items_id_foreign" FOREIGN KEY ("list_items_id") REFERENCES "public"."list_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items_products" ADD CONSTRAINT "list_items_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_articles" ADD CONSTRAINT "platform_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_articles" ADD CONSTRAINT "platform_articles_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_versions" ADD CONSTRAINT "directus_versions_collection_foreign" FOREIGN KEY ("collection") REFERENCES "public"."directus_collections"("collection") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_versions" ADD CONSTRAINT "directus_versions_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_versions" ADD CONSTRAINT "directus_versions_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_coupons" ADD CONSTRAINT "events_coupons_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_cities" ADD CONSTRAINT "events_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_cities" ADD CONSTRAINT "events_cities_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_states" ADD CONSTRAINT "events_states_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_states" ADD CONSTRAINT "events_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_directus_users" ADD CONSTRAINT "faqs_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_directus_users" ADD CONSTRAINT "faqs_directus_users_faqs_id_foreign" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_products" ADD CONSTRAINT "faqs_products_faqs_id_foreign" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_products" ADD CONSTRAINT "faqs_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_files" ADD CONSTRAINT "faqs_files_faqs_id_foreign" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_products" ADD CONSTRAINT "incentives_products_incentives_id_foreign" FOREIGN KEY ("incentives_id") REFERENCES "public"."incentives"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_products" ADD CONSTRAINT "incentives_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "circles_products" ADD CONSTRAINT "circles_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "navigation_websites" ADD CONSTRAINT "navigation_websites_navigation_id_foreign" FOREIGN KEY ("navigation_id") REFERENCES "public"."navigation"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "navigation_websites" ADD CONSTRAINT "navigation_websites_websites_id_foreign" FOREIGN KEY ("websites_id") REFERENCES "public"."websites"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feeds" ADD CONSTRAINT "feeds_shop_foreign" FOREIGN KEY ("shop") REFERENCES "public"."shops"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feeds_posts" ADD CONSTRAINT "feeds_posts_feed_id_foreign" FOREIGN KEY ("feed_id") REFERENCES "public"."feeds"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feeds_posts" ADD CONSTRAINT "feeds_posts_post_id_foreign" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_events" ADD CONSTRAINT "gamification_events_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_events" ADD CONSTRAINT "gamification_events_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_anniversaries_foreign" FOREIGN KEY ("anniversaries") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_birthdays_foreign" FOREIGN KEY ("birthdays") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_leaderboards_foreign" FOREIGN KEY ("leaderboards") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_nomination_user_foreign" FOREIGN KEY ("nomination_user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_user_profile_foreign" FOREIGN KEY ("user_profile") REFERENCES "public"."user_profile"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_report" ADD CONSTRAINT "integrations_report_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_report" ADD CONSTRAINT "integrations_report_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_spaces" ADD CONSTRAINT "integrations_spaces_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_spaces" ADD CONSTRAINT "integrations_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_address" ADD CONSTRAINT "invoices_address_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_address" ADD CONSTRAINT "invoices_address_invoice_id_foreign" FOREIGN KEY ("invoice_id") REFERENCES "public"."invoices"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_currency" ADD CONSTRAINT "payments_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_currency" ADD CONSTRAINT "payments_currency_payments_id_foreign" FOREIGN KEY ("payments_id") REFERENCES "public"."payments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "page_blocks_files" ADD CONSTRAINT "page_blocks_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "page_blocks_files" ADD CONSTRAINT "page_blocks_files_page_blocks_id_foreign" FOREIGN KEY ("page_blocks_id") REFERENCES "public"."page_blocks"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_orders" ADD CONSTRAINT "invoices_orders_invoice_id_foreign" FOREIGN KEY ("invoice_id") REFERENCES "public"."invoices"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_orders" ADD CONSTRAINT "invoices_orders_order_id_foreign" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_list_id_foreign" FOREIGN KEY ("list_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_media_foreign" FOREIGN KEY ("media") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_post_id_foreign" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_directus_users" ADD CONSTRAINT "lists_directus_users_list_id_foreign" FOREIGN KEY ("list_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_websites" ADD CONSTRAINT "postgresstores_websites_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_websites" ADD CONSTRAINT "postgresstores_websites_websites_id_foreign" FOREIGN KEY ("websites_id") REFERENCES "public"."websites"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "manufacturer_countries" ADD CONSTRAINT "manufacturer_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "manufacturer_countries" ADD CONSTRAINT "manufacturer_countries_manufacturer_id_foreign" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "circles_posts" ADD CONSTRAINT "circles_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_page_blocks" ADD CONSTRAINT "platform_page_blocks_page_blocks_id_foreign" FOREIGN KEY ("page_blocks_id") REFERENCES "public"."page_blocks"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_page_blocks" ADD CONSTRAINT "platform_page_blocks_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items_products" ADD CONSTRAINT "order_items_products_order_items_id_foreign" FOREIGN KEY ("order_items_id") REFERENCES "public"."order_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items_products" ADD CONSTRAINT "order_items_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios" ADD CONSTRAINT "radios_file_foreign" FOREIGN KEY ("file") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios" ADD CONSTRAINT "radios_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios" ADD CONSTRAINT "radios_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios" ADD CONSTRAINT "radios_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_departments" ADD CONSTRAINT "radios_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_departments" ADD CONSTRAINT "radios_departments_radios_id_foreign" FOREIGN KEY ("radios_id") REFERENCES "public"."radios"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_avatar_foreign" FOREIGN KEY ("avatar") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_musicchart" ADD CONSTRAINT "radios_musicchart_radios_id_foreign" FOREIGN KEY ("radios_id") REFERENCES "public"."radios"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders_products" ADD CONSTRAINT "orders_products_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders_products" ADD CONSTRAINT "orders_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets_categories" ADD CONSTRAINT "outlets_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets_categories" ADD CONSTRAINT "outlets_categories_outlets_id_foreign" FOREIGN KEY ("outlets_id") REFERENCES "public"."outlets"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets" ADD CONSTRAINT "outlets_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_directus_users" ADD CONSTRAINT "payments_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_directus_users" ADD CONSTRAINT "payments_directus_users_payments_id_foreign" FOREIGN KEY ("payments_id") REFERENCES "public"."payments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_products_products" ADD CONSTRAINT "related_products_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_products_products" ADD CONSTRAINT "related_products_products_related_products_id_foreign" FOREIGN KEY ("related_products_id") REFERENCES "public"."related_products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_shipping_address" ADD CONSTRAINT "region_shipping_address_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_shipping_address" ADD CONSTRAINT "region_shipping_address_shipping_address_id_foreign" FOREIGN KEY ("shipping_address_id") REFERENCES "public"."shipping_address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_comments" ADD CONSTRAINT "report_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_comments" ADD CONSTRAINT "report_comments_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_directus_users" ADD CONSTRAINT "report_directus_users_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_faqs" ADD CONSTRAINT "report_faqs_faqs_id_foreign" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_faqs" ADD CONSTRAINT "report_faqs_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pickup_locations_city" ADD CONSTRAINT "pickup_locations_city_pickup_locations_id_foreign" FOREIGN KEY ("pickup_locations_id") REFERENCES "public"."pickup_locations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pickup_locations_country" ADD CONSTRAINT "pickup_locations_country_pickup_locations_id_foreign" FOREIGN KEY ("pickup_locations_id") REFERENCES "public"."pickup_locations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pickup_locations_state" ADD CONSTRAINT "pickup_locations_state_pickup_locations_id_foreign" FOREIGN KEY ("pickup_locations_id") REFERENCES "public"."pickup_locations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment" ADD CONSTRAINT "shipment_order_foreign" FOREIGN KEY ("order") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_articles" ADD CONSTRAINT "finance_index_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_articles" ADD CONSTRAINT "finance_index_articles_finance_index_id_foreign" FOREIGN KEY ("finance_index_id") REFERENCES "public"."finance_index"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_products" ADD CONSTRAINT "shipment_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_products" ADD CONSTRAINT "shipment_products_shipment_id_foreign" FOREIGN KEY ("shipment_id") REFERENCES "public"."shipment"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets_shorts" ADD CONSTRAINT "outlets_shorts_outlets_id_foreign" FOREIGN KEY ("outlets_id") REFERENCES "public"."outlets"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets_shorts" ADD CONSTRAINT "outlets_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_posts" ADD CONSTRAINT "report_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_posts" ADD CONSTRAINT "report_posts_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_countries" ADD CONSTRAINT "products_countries_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_currency" ADD CONSTRAINT "products_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_currency" ADD CONSTRAINT "products_currency_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_departments" ADD CONSTRAINT "products_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_departments" ADD CONSTRAINT "products_departments_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_manufacturer" ADD CONSTRAINT "products_manufacturer_manufacturer_id_foreign" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_manufacturer" ADD CONSTRAINT "products_manufacturer_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_directus_users" ADD CONSTRAINT "products_directus_users_product_id_foreign" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts" ADD CONSTRAINT "shorts_video_foreign" FOREIGN KEY ("video") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_directus_users" ADD CONSTRAINT "shipping_addresses_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_directus_users" ADD CONSTRAINT "shipping_addresses_directus_users_shipping__1c96539d_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_orders" ADD CONSTRAINT "shipping_addresses_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_orders" ADD CONSTRAINT "shipping_addresses_orders_shipping_addresses_id_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_product_designer" ADD CONSTRAINT "products_product_designer_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_collections" ADD CONSTRAINT "postgresstores_collections_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_collections" ADD CONSTRAINT "postgresstores_collections_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings_products" ADD CONSTRAINT "ratings_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings_products" ADD CONSTRAINT "ratings_products_ratings_id_foreign" FOREIGN KEY ("ratings_id") REFERENCES "public"."ratings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_comments" ADD CONSTRAINT "reactions_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_comments" ADD CONSTRAINT "reactions_comments_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_websites" ADD CONSTRAINT "products_websites_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_websites" ADD CONSTRAINT "products_websites_websites_id_foreign" FOREIGN KEY ("websites_id") REFERENCES "public"."websites"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_lists" ADD CONSTRAINT "reactions_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_lists" ADD CONSTRAINT "reactions_lists_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_directus_users" ADD CONSTRAINT "reactions_directus_users_reaction_id_foreign" FOREIGN KEY ("reaction_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_posts" ADD CONSTRAINT "reactions_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_posts" ADD CONSTRAINT "reactions_posts_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_shorts" ADD CONSTRAINT "reactions_shorts_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_shorts" ADD CONSTRAINT "reactions_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_products" ADD CONSTRAINT "report_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_products" ADD CONSTRAINT "report_products_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_spaces" ADD CONSTRAINT "shorts_spaces_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_spaces" ADD CONSTRAINT "shorts_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "site_preference_countries" ADD CONSTRAINT "site_preference_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "site_preference_departments" ADD CONSTRAINT "site_preference_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends_posts" ADD CONSTRAINT "user_friends_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends_posts" ADD CONSTRAINT "user_friends_posts_user_friends_id_foreign" FOREIGN KEY ("user_friends_id") REFERENCES "public"."user_friends"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_projects" ADD CONSTRAINT "project_board_projects_project_board_id_foreign" FOREIGN KEY ("project_board_id") REFERENCES "public"."project_board"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_projects" ADD CONSTRAINT "project_board_projects_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emoji_reactions" ADD CONSTRAINT "emoji_reactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "returns_orders" ADD CONSTRAINT "returns_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "returns_orders" ADD CONSTRAINT "returns_orders_returns_id_foreign" FOREIGN KEY ("returns_id") REFERENCES "public"."returns"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews_products" ADD CONSTRAINT "reviews_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_icon_foreign" FOREIGN KEY ("icon") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_comments" ADD CONSTRAINT "shipment_comments_parent_id_foreign" FOREIGN KEY ("parent_id") REFERENCES "public"."shipment"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_files" ADD CONSTRAINT "project_board_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_files" ADD CONSTRAINT "project_board_files_project_board_id_foreign" FOREIGN KEY ("project_board_id") REFERENCES "public"."project_board"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_tracking" ADD CONSTRAINT "shipment_tracking_parent_id_foreign" FOREIGN KEY ("parent_id") REFERENCES "public"."shipment"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_project_timeline" ADD CONSTRAINT "projects_project_timeline_project_timeline_id_foreign" FOREIGN KEY ("project_timeline_id") REFERENCES "public"."project_timeline"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_project_timeline" ADD CONSTRAINT "projects_project_timeline_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_directus_users" ADD CONSTRAINT "calendar_directus_users_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_directus_users" ADD CONSTRAINT "calendar_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_states" ADD CONSTRAINT "shipping_addresses_states_shipping_addresses_id_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_states" ADD CONSTRAINT "shipping_addresses_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_categories" ADD CONSTRAINT "shops_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_categories" ADD CONSTRAINT "shops_categories_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_comments" ADD CONSTRAINT "shops_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_comments" ADD CONSTRAINT "shops_comments_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_countries" ADD CONSTRAINT "shops_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_countries" ADD CONSTRAINT "shops_countries_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_departments" ADD CONSTRAINT "shops_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_departments" ADD CONSTRAINT "shops_departments_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_directus_users" ADD CONSTRAINT "shops_directus_users_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taxes_countries" ADD CONSTRAINT "taxes_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taxes_countries" ADD CONSTRAINT "taxes_countries_taxes_id_foreign" FOREIGN KEY ("taxes_id") REFERENCES "public"."taxes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taxes_states" ADD CONSTRAINT "taxes_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taxes_states" ADD CONSTRAINT "taxes_states_taxes_id_foreign" FOREIGN KEY ("taxes_id") REFERENCES "public"."taxes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_avatar_foreign" FOREIGN KEY ("avatar") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "translations_postgresstores" ADD CONSTRAINT "translations_postgresstores_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "translations_postgresstores" ADD CONSTRAINT "translations_postgresstores_translations_id_foreign" FOREIGN KEY ("translations_id") REFERENCES "public"."translations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_shorts" ADD CONSTRAINT "tags_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_shorts" ADD CONSTRAINT "tags_shorts_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_files" ADD CONSTRAINT "shops_files_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_products" ADD CONSTRAINT "shops_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_products" ADD CONSTRAINT "shops_products_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_manufacturer" ADD CONSTRAINT "videos_manufacturer_manufacturer_id_foreign" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_manufacturer" ADD CONSTRAINT "videos_manufacturer_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_products" ADD CONSTRAINT "videos_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_products" ADD CONSTRAINT "videos_products_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_directus_users" ADD CONSTRAINT "shorts_directus_users_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_tags" ADD CONSTRAINT "spaces_tags_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_tags" ADD CONSTRAINT "spaces_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_posts" ADD CONSTRAINT "spaces_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_posts" ADD CONSTRAINT "spaces_posts_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "streams" ADD CONSTRAINT "streams_stream_id_foreign" FOREIGN KEY ("stream_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_categories" ADD CONSTRAINT "tags_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_categories" ADD CONSTRAINT "tags_categories_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_departments" ADD CONSTRAINT "tags_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_departments" ADD CONSTRAINT "tags_departments_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_files" ADD CONSTRAINT "spaces_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_files" ADD CONSTRAINT "spaces_files_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands" ADD CONSTRAINT "brands_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_products" ADD CONSTRAINT "cart_products_cart_id_foreign" FOREIGN KEY ("cart_id") REFERENCES "public"."cart"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_products" ADD CONSTRAINT "cart_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_categories" ADD CONSTRAINT "brands_categories_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_categories" ADD CONSTRAINT "brands_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_departments" ADD CONSTRAINT "brands_departments_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_departments" ADD CONSTRAINT "brands_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_manufacturer" ADD CONSTRAINT "brands_manufacturer_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_manufacturer" ADD CONSTRAINT "brands_manufacturer_manufacturer_id_foreign" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_shorts" ADD CONSTRAINT "brands_shorts_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_shorts" ADD CONSTRAINT "brands_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_departments" ADD CONSTRAINT "categories_departments_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_departments" ADD CONSTRAINT "categories_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_products" ADD CONSTRAINT "collections_products_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_products" ADD CONSTRAINT "collections_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_reactions" ADD CONSTRAINT "comments_reactions_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_reactions" ADD CONSTRAINT "comments_reactions_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_revisions" ADD CONSTRAINT "directus_revisions_activity_foreign" FOREIGN KEY ("activity") REFERENCES "public"."directus_activity"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_revisions" ADD CONSTRAINT "directus_revisions_parent_foreign" FOREIGN KEY ("parent") REFERENCES "public"."directus_revisions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_revisions" ADD CONSTRAINT "directus_revisions_version_foreign" FOREIGN KEY ("version") REFERENCES "public"."directus_versions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_presets" ADD CONSTRAINT "directus_presets_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_presets" ADD CONSTRAINT "directus_presets_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_sessions" ADD CONSTRAINT "directus_sessions_share_foreign" FOREIGN KEY ("share") REFERENCES "public"."directus_shares"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_sessions" ADD CONSTRAINT "directus_sessions_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_roles" ADD CONSTRAINT "directus_roles_parent_foreign" FOREIGN KEY ("parent") REFERENCES "public"."directus_roles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_countries" ADD CONSTRAINT "events_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_countries" ADD CONSTRAINT "events_countries_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_users" ADD CONSTRAINT "directus_users_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_files" ADD CONSTRAINT "events_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_files" ADD CONSTRAINT "events_files_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_products" ADD CONSTRAINT "events_products_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_products" ADD CONSTRAINT "events_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_directus_users" ADD CONSTRAINT "gamification_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_directus_users" ADD CONSTRAINT "gamification_directus_users_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_notifications" ADD CONSTRAINT "gamification_notifications_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_notifications" ADD CONSTRAINT "gamification_notifications_notifications_id_foreign" FOREIGN KEY ("notifications_id") REFERENCES "public"."notifications"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_products" ADD CONSTRAINT "gamification_products_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_products" ADD CONSTRAINT "gamification_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_shipping_address" ADD CONSTRAINT "invoices_shipping_address_invoice_id_foreign" FOREIGN KEY ("invoice_id") REFERENCES "public"."invoices"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_shipping_address" ADD CONSTRAINT "invoices_shipping_address_shipping_address_id_foreign" FOREIGN KEY ("shipping_address_id") REFERENCES "public"."shipping_address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_region" ADD CONSTRAINT "projects_region_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_region" ADD CONSTRAINT "projects_region_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_files" ADD CONSTRAINT "projects_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_files" ADD CONSTRAINT "projects_files_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_countries" ADD CONSTRAINT "region_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_countries" ADD CONSTRAINT "region_countries_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_countries" ADD CONSTRAINT "address_countries_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_countries" ADD CONSTRAINT "address_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agreements_products" ADD CONSTRAINT "agreements_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_categories" ADD CONSTRAINT "articles_categories_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_categories" ADD CONSTRAINT "articles_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_departments" ADD CONSTRAINT "articles_departments_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_departments" ADD CONSTRAINT "articles_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_types_products" ADD CONSTRAINT "product_types_products_product_types_id_foreign" FOREIGN KEY ("product_types_id") REFERENCES "public"."product_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_types_products" ADD CONSTRAINT "product_types_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "circles_directus_users" ADD CONSTRAINT "circles_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "connections_directus_users" ADD CONSTRAINT "connections_directus_users_connections_id_foreign" FOREIGN KEY ("connections_id") REFERENCES "public"."connections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "navigation_pages" ADD CONSTRAINT "navigation_pages_navigation_id_foreign" FOREIGN KEY ("navigation_id") REFERENCES "public"."navigation"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "navigation_pages" ADD CONSTRAINT "navigation_pages_pages_id_foreign" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions_directus_users" ADD CONSTRAINT "subscriptions_directus_users_subscriptions_id_foreign" FOREIGN KEY ("subscriptions_id") REFERENCES "public"."subscriptions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attributes_products" ADD CONSTRAINT "attributes_products_attributes_id_foreign" FOREIGN KEY ("attributes_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attributes_products" ADD CONSTRAINT "attributes_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "page_blocks" ADD CONSTRAINT "page_blocks_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "page_blocks" ADD CONSTRAINT "page_blocks_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_recipient_foreign" FOREIGN KEY ("recipient") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items_orders" ADD CONSTRAINT "order_items_orders_order_items_id_foreign" FOREIGN KEY ("order_items_id") REFERENCES "public"."order_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items_orders" ADD CONSTRAINT "order_items_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_orders" ADD CONSTRAINT "payments_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_orders" ADD CONSTRAINT "payments_orders_payments_id_foreign" FOREIGN KEY ("payments_id") REFERENCES "public"."payments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "redirects" ADD CONSTRAINT "redirects_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "redirects" ADD CONSTRAINT "redirects_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_products" ADD CONSTRAINT "postgresstores_products_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_products" ADD CONSTRAINT "postgresstores_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_attributes" ADD CONSTRAINT "products_attributes_attributes_id_foreign" FOREIGN KEY ("attributes_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_attributes" ADD CONSTRAINT "products_attributes_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_followers" ADD CONSTRAINT "profiles_followers_followers_id_foreign" FOREIGN KEY ("followers_id") REFERENCES "public"."followers"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_followers" ADD CONSTRAINT "profiles_followers_profiles_id_foreign" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_spaces" ADD CONSTRAINT "products_spaces_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_spaces" ADD CONSTRAINT "products_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_tags" ADD CONSTRAINT "products_tags_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_tags" ADD CONSTRAINT "products_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_categories" ADD CONSTRAINT "radios_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_categories" ADD CONSTRAINT "radios_categories_radios_id_foreign" FOREIGN KEY ("radios_id") REFERENCES "public"."radios"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_products" ADD CONSTRAINT "related_products_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_list_id_foreign" FOREIGN KEY ("list_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_posts_foreign" FOREIGN KEY ("posts") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_product_foreign" FOREIGN KEY ("product") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_space_id_foreign" FOREIGN KEY ("space_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_video_id_foreign" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_flows" ADD CONSTRAINT "directus_flows_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_sell_products_products" ADD CONSTRAINT "cross_sell_products_products_cross_sell_products_id_foreign" FOREIGN KEY ("cross_sell_products_id") REFERENCES "public"."cross_sell_products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_sell_products_products" ADD CONSTRAINT "cross_sell_products_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_notifications" ADD CONSTRAINT "directus_notifications_recipient_foreign" FOREIGN KEY ("recipient") REFERENCES "public"."directus_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_notifications" ADD CONSTRAINT "directus_notifications_sender_foreign" FOREIGN KEY ("sender") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_dashboards" ADD CONSTRAINT "directus_dashboards_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_address" ADD CONSTRAINT "region_address_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_address" ADD CONSTRAINT "region_address_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_address" ADD CONSTRAINT "shipment_address_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_address" ADD CONSTRAINT "shipment_address_shipment_id_foreign" FOREIGN KEY ("shipment_id") REFERENCES "public"."shipment"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "returns_products" ADD CONSTRAINT "returns_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "returns_products" ADD CONSTRAINT "returns_products_returns_id_foreign" FOREIGN KEY ("returns_id") REFERENCES "public"."returns"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seasons" ADD CONSTRAINT "seasons_name_foreign" FOREIGN KEY ("name") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_directus_users" ADD CONSTRAINT "events_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_directus_users" ADD CONSTRAINT "events_directus_users_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_cities" ADD CONSTRAINT "shipping_addresses_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_cities" ADD CONSTRAINT "shipping_addresses_cities_shipping_addresses_id_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_countries" ADD CONSTRAINT "shipping_addresses_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_countries" ADD CONSTRAINT "shipping_addresses_countries_shipping_addresses_id_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_agreements" ADD CONSTRAINT "shops_agreements_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_showcases" ADD CONSTRAINT "shops_showcases_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_showcases" ADD CONSTRAINT "shops_showcases_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_files" ADD CONSTRAINT "shorts_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_files" ADD CONSTRAINT "shorts_files_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "site_preference_categories" ADD CONSTRAINT "site_preference_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "site_preference_products" ADD CONSTRAINT "site_preference_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_order_foreign" FOREIGN KEY ("order") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_products_lists" ADD CONSTRAINT "list_products_lists_list_products_id_foreign" FOREIGN KEY ("list_products_id") REFERENCES "public"."list_products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_products_lists" ADD CONSTRAINT "list_products_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_countries" ADD CONSTRAINT "payments_countries_country_id_foreign" FOREIGN KEY ("country_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_countries" ADD CONSTRAINT "payments_countries_payment_id_foreign" FOREIGN KEY ("payment_id") REFERENCES "public"."payments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "musicchart_departments" ADD CONSTRAINT "musicchart_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_products" ADD CONSTRAINT "lists_products_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_products" ADD CONSTRAINT "lists_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases" ADD CONSTRAINT "showcases_owner_foreign" FOREIGN KEY ("owner") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_departments" ADD CONSTRAINT "spaces_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_departments" ADD CONSTRAINT "spaces_departments_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions_products" ADD CONSTRAINT "subscriptions_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions_products" ADD CONSTRAINT "subscriptions_products_subscriptions_id_foreign" FOREIGN KEY ("subscriptions_id") REFERENCES "public"."subscriptions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "states_cities" ADD CONSTRAINT "states_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "states_cities" ADD CONSTRAINT "states_cities_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "streams_ratings" ADD CONSTRAINT "streams_ratings_ratings_id_foreign" FOREIGN KEY ("ratings_id") REFERENCES "public"."ratings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "streams_ratings" ADD CONSTRAINT "streams_ratings_streams_id_foreign" FOREIGN KEY ("streams_id") REFERENCES "public"."streams"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_articles" ADD CONSTRAINT "tags_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_articles" ADD CONSTRAINT "tags_articles_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_products" ADD CONSTRAINT "tags_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_products" ADD CONSTRAINT "tags_products_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_lists" ADD CONSTRAINT "calendar_lists_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_lists" ADD CONSTRAINT "calendar_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_files" ADD CONSTRAINT "lists_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_files" ADD CONSTRAINT "lists_files_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_lists" ADD CONSTRAINT "projects_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_lists" ADD CONSTRAINT "projects_lists_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_comments" ADD CONSTRAINT "videos_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_comments" ADD CONSTRAINT "videos_comments_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_showcases" ADD CONSTRAINT "departments_showcases_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_showcases" ADD CONSTRAINT "departments_showcases_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat" ADD CONSTRAINT "chat_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat" ADD CONSTRAINT "chat_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat" ADD CONSTRAINT "chat_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "about_departments_platform" ADD CONSTRAINT "about_departments_platform_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_countries" ADD CONSTRAINT "profiles_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_countries" ADD CONSTRAINT "profiles_countries_profiles_id_foreign" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_states" ADD CONSTRAINT "profiles_states_profiles_id_foreign" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_states" ADD CONSTRAINT "profiles_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board" ADD CONSTRAINT "project_board_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board" ADD CONSTRAINT "project_board_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_spaces" ADD CONSTRAINT "collections_spaces_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_spaces" ADD CONSTRAINT "collections_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template" ADD CONSTRAINT "lists_template_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template" ADD CONSTRAINT "lists_template_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "templates" ADD CONSTRAINT "templates_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "templates" ADD CONSTRAINT "templates_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_comments" ADD CONSTRAINT "project_board_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_comments" ADD CONSTRAINT "project_board_comments_project_board_id_foreign" FOREIGN KEY ("project_board_id") REFERENCES "public"."project_board"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chart_entries" ADD CONSTRAINT "chart_entries_chart_id_foreign" FOREIGN KEY ("chart_id") REFERENCES "public"."charts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chart_entries" ADD CONSTRAINT "chart_entries_product_id_foreign" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders_directus_users" ADD CONSTRAINT "media_folders_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders_directus_users" ADD CONSTRAINT "media_folders_directus_users_media_folders_id_foreign" FOREIGN KEY ("media_folders_id") REFERENCES "public"."media_folders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_products" ADD CONSTRAINT "shorts_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_products" ADD CONSTRAINT "shorts_products_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_platform" ADD CONSTRAINT "integrations_platform_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_platform" ADD CONSTRAINT "integrations_platform_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_cities" ADD CONSTRAINT "geo_regions_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_cities" ADD CONSTRAINT "geo_regions_cities_geo_regions_id_foreign" FOREIGN KEY ("geo_regions_id") REFERENCES "public"."geo_regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_states" ADD CONSTRAINT "geo_regions_states_geo_regions_id_foreign" FOREIGN KEY ("geo_regions_id") REFERENCES "public"."geo_regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_states" ADD CONSTRAINT "geo_regions_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_friend_foreign" FOREIGN KEY ("friend") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "websites" ADD CONSTRAINT "websites_creator_foreign" FOREIGN KEY ("creator") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_comments" ADD CONSTRAINT "projects_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_comments" ADD CONSTRAINT "projects_comments_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_templates" ADD CONSTRAINT "lists_templates_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_templates" ADD CONSTRAINT "lists_templates_templates_id_foreign" FOREIGN KEY ("templates_id") REFERENCES "public"."templates"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_tags" ADD CONSTRAINT "videos_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_tags" ADD CONSTRAINT "videos_tags_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_countries" ADD CONSTRAINT "geo_regions_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_countries" ADD CONSTRAINT "geo_regions_countries_geo_regions_id_foreign" FOREIGN KEY ("geo_regions_id") REFERENCES "public"."geo_regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_distributor_foreign" FOREIGN KEY ("distributor") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_media_foreign" FOREIGN KEY ("media") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_ratings_foreign" FOREIGN KEY ("ratings") REFERENCES "public"."ratings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_thumbnail_foreign" FOREIGN KEY ("thumbnail") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "countries_currency" ADD CONSTRAINT "countries_currency_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "countries_currency" ADD CONSTRAINT "countries_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_calendar" ADD CONSTRAINT "projects_calendar_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_calendar" ADD CONSTRAINT "projects_calendar_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_tags" ADD CONSTRAINT "integrations_tags_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_tags" ADD CONSTRAINT "integrations_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_categories" ADD CONSTRAINT "integrations_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_categories" ADD CONSTRAINT "integrations_categories_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_tags" ADD CONSTRAINT "lists_template_tags_lists_template_id_foreign" FOREIGN KEY ("lists_template_id") REFERENCES "public"."lists_template"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_tags" ADD CONSTRAINT "lists_template_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "about_departments_pages" ADD CONSTRAINT "about_departments_pages_pages_id_foreign" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "about_departments_articles" ADD CONSTRAINT "about_departments_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_posts" ADD CONSTRAINT "tags_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_posts" ADD CONSTRAINT "tags_posts_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_attributes" ADD CONSTRAINT "integrations_attributes_attributes_id_foreign" FOREIGN KEY ("attributes_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_attributes" ADD CONSTRAINT "integrations_attributes_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_cities" ADD CONSTRAINT "profiles_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_cities" ADD CONSTRAINT "profiles_cities_profiles_id_foreign" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_product_types" ADD CONSTRAINT "integrations_product_types_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_product_types" ADD CONSTRAINT "integrations_product_types_product_types_id_foreign" FOREIGN KEY ("product_types_id") REFERENCES "public"."product_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_posts" ADD CONSTRAINT "events_posts_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_posts" ADD CONSTRAINT "events_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_lists" ADD CONSTRAINT "spaces_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_lists" ADD CONSTRAINT "spaces_lists_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls_spaces" ADD CONSTRAINT "polls_spaces_polls_id_foreign" FOREIGN KEY ("polls_id") REFERENCES "public"."polls"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls_spaces" ADD CONSTRAINT "polls_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls" ADD CONSTRAINT "polls_author_foreign" FOREIGN KEY ("author") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls" ADD CONSTRAINT "polls_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls" ADD CONSTRAINT "polls_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls" ADD CONSTRAINT "polls_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_live_rooms" ADD CONSTRAINT "spaces_live_rooms_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items_directus_users" ADD CONSTRAINT "list_items_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items_directus_users" ADD CONSTRAINT "list_items_directus_users_list_items_id_foreign" FOREIGN KEY ("list_items_id") REFERENCES "public"."list_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_integrations" ADD CONSTRAINT "calendar_integrations_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_integrations" ADD CONSTRAINT "calendar_integrations_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_integrations" ADD CONSTRAINT "projects_integrations_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_integrations" ADD CONSTRAINT "projects_integrations_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_products" ADD CONSTRAINT "projects_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_products" ADD CONSTRAINT "projects_products_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_comments" ADD CONSTRAINT "calendar_comments_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_comments" ADD CONSTRAINT "calendar_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar" ADD CONSTRAINT "calendar_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_groups_posts" ADD CONSTRAINT "member_groups_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_groups_polls" ADD CONSTRAINT "member_groups_polls_polls_id_foreign" FOREIGN KEY ("polls_id") REFERENCES "public"."polls"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_groups_events" ADD CONSTRAINT "member_groups_events_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_groups_products" ADD CONSTRAINT "member_groups_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations" ADD CONSTRAINT "integrations_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations" ADD CONSTRAINT "integrations_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_spaces" ADD CONSTRAINT "showcases_spaces_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_spaces" ADD CONSTRAINT "showcases_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attributes_product_types" ADD CONSTRAINT "attributes_product_types_attributes_id_foreign" FOREIGN KEY ("attributes_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attributes_product_types" ADD CONSTRAINT "attributes_product_types_product_types_id_foreign" FOREIGN KEY ("product_types_id") REFERENCES "public"."product_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_attributes" ADD CONSTRAINT "product_attributes_attribute_id_foreign" FOREIGN KEY ("attribute_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_attributes" ADD CONSTRAINT "product_attributes_product_id_foreign" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type_lists" ADD CONSTRAINT "lists_type_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type_lists" ADD CONSTRAINT "lists_type_lists_lists_type_id_foreign" FOREIGN KEY ("lists_type_id") REFERENCES "public"."lists_type"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type" ADD CONSTRAINT "lists_type_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type" ADD CONSTRAINT "lists_type_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type_categories" ADD CONSTRAINT "lists_type_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type_categories" ADD CONSTRAINT "lists_type_categories_lists_type_id_foreign" FOREIGN KEY ("lists_type_id") REFERENCES "public"."lists_type"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_departments" ADD CONSTRAINT "charts_departments_charts_id_foreign" FOREIGN KEY ("charts_id") REFERENCES "public"."charts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_departments" ADD CONSTRAINT "charts_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_products" ADD CONSTRAINT "charts_products_charts_id_foreign" FOREIGN KEY ("charts_id") REFERENCES "public"."charts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_products" ADD CONSTRAINT "charts_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_departments" ADD CONSTRAINT "lists_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_departments" ADD CONSTRAINT "lists_departments_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_radios" ADD CONSTRAINT "charts_radios_charts_id_foreign" FOREIGN KEY ("charts_id") REFERENCES "public"."charts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_radios" ADD CONSTRAINT "charts_radios_radios_id_foreign" FOREIGN KEY ("radios_id") REFERENCES "public"."radios"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts" ADD CONSTRAINT "charts_icon_foreign" FOREIGN KEY ("icon") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_categories" ADD CONSTRAINT "lists_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_categories" ADD CONSTRAINT "lists_categories_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_shorts" ADD CONSTRAINT "lists_shorts_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_shorts" ADD CONSTRAINT "lists_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_categories" ADD CONSTRAINT "videos_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_categories" ADD CONSTRAINT "videos_categories_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_directus_users" ADD CONSTRAINT "spaces_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_directus_users" ADD CONSTRAINT "spaces_directus_users_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_departments" ADD CONSTRAINT "videos_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_departments" ADD CONSTRAINT "videos_departments_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_product_types" ADD CONSTRAINT "videos_product_types_product_types_id_foreign" FOREIGN KEY ("product_types_id") REFERENCES "public"."product_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_product_types" ADD CONSTRAINT "videos_product_types_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shop_type_shops" ADD CONSTRAINT "shop_type_shops_shop_type_id_foreign" FOREIGN KEY ("shop_type_id") REFERENCES "public"."shop_type"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shop_type_shops" ADD CONSTRAINT "shop_type_shops_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auction_lots" ADD CONSTRAINT "auction_lots_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variants" ADD CONSTRAINT "variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_products" ADD CONSTRAINT "showcases_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_products" ADD CONSTRAINT "showcases_products_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_project_logo_foreign" FOREIGN KEY ("project_logo") REFERENCES "public"."directus_files"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_background_foreign" FOREIGN KEY ("public_background") REFERENCES "public"."directus_files"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_favicon_foreign" FOREIGN KEY ("public_favicon") REFERENCES "public"."directus_files"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_foreground_foreign" FOREIGN KEY ("public_foreground") REFERENCES "public"."directus_files"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_registration_role_foreign" FOREIGN KEY ("public_registration_role") REFERENCES "public"."directus_roles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_storage_default_folder_foreign" FOREIGN KEY ("storage_default_folder") REFERENCES "public"."directus_folders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_directus_users" ADD CONSTRAINT "lists_template_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_directus_users" ADD CONSTRAINT "lists_template_directus_users_lists_template_id_foreign" FOREIGN KEY ("lists_template_id") REFERENCES "public"."lists_template"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_list_items" ADD CONSTRAINT "lists_template_list_items_list_items_id_foreign" FOREIGN KEY ("list_items_id") REFERENCES "public"."list_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_list_items" ADD CONSTRAINT "lists_template_list_items_lists_template_id_foreign" FOREIGN KEY ("lists_template_id") REFERENCES "public"."lists_template"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "federated_spaces_spaces" ADD CONSTRAINT "federated_spaces_spaces_federated_spaces_id_foreign" FOREIGN KEY ("federated_spaces_id") REFERENCES "public"."federated_spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "federated_spaces_spaces" ADD CONSTRAINT "federated_spaces_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bids" ADD CONSTRAINT "bids_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "public"."auction_lots"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_profile_id_foreign" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_files" ADD CONSTRAINT "media_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_files" ADD CONSTRAINT "media_files_media_id_foreign" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vibez_product_map" ADD CONSTRAINT "vibez_product_map_clip_id_fkey" FOREIGN KEY ("clip_id") REFERENCES "public"."vibez_clips"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vibez_product_map" ADD CONSTRAINT "vibez_product_map_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "ai_prompts_name_index" ON "ai_prompts" USING btree ("name" text_ops);--> statement-breakpoint
CREATE INDEX "directus_activity_timestamp_index" ON "directus_activity" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "profiles_supabase_user_id_index" ON "profiles" USING btree ("supabase_user_id" uuid_ops);--> statement-breakpoint
CREATE INDEX "directus_revisions_parent_index" ON "directus_revisions" USING btree ("parent" int4_ops);--> statement-breakpoint
CREATE POLICY "Users can see their own newsfeed" ON "feeds" AS PERMISSIVE FOR SELECT TO public USING (("user" = auth.uid()));
*/