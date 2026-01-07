import { relations } from "drizzle-orm/relations";
import { directusFiles, spaces, directusUsers, shopType, spacesShopType, moments, momentsSpaces, spacesTemplates, templates, shops, showcasesShops, showcases, address, addressCart, cart, announcements, articles, articlesComments, comments, media, mediaFolders, seasons, seasonsVideos, videos, cities, spacesCities, posts, countries, countriesTimezones, timezones, spacesArticles, spacesStates, states, spacesCountries, brands, brandsProducts, products, citiesCountries, cartCartItems, cartItems, spaceTypes, templatesSpaceTypes, projectBoardDirectusUsers, projectBoard, polls, postsPolls, platform, incentives, currency, incentivesCurrency, couponsProducts, crossSellProducts, momentsProducts, spacesSpaceTypes, projectsDirectusUsers, projects, addressCities, aiPrompts, spaceProducts, platformProducts, addressDirectusUsers, financeIndex, financeIndexRegion, region, financeIndexCurrency, citiesStates, commentsDirectusUsers, collectionsBrands, collections, commentsProducts, commentsShorts, shorts, categories, categoriesShorts, categoriesPostgresstores, postgresstores, currencyDepartments, departments, directusPolicies, directusAccess, directusRoles, departmentsCategories, departmentsCollections, departmentsProducts, directusComments, departmentsShorts, platformCategories, events, eventsLists, lists, eventsInvoices, invoices, directusCollections, directusFlows, directusOperations, pages, platformPages, directusFolders, directusDashboards, directusPanels, platformLists, gamification, gamificationVideos, integrationsDepartments, integrations, integrationsRatings, ratings, integrationsFiles, transactionsCurrency, transactions, directusPermissions, navigation, platformNavigation, directusWebhooks, incentivesOrders, orders, directusShares, report, reportSpaces, listItems, listItemsProducts, platformArticles, directusVersions, eventsCoupons, eventsCities, eventsStates, faqsDirectusUsers, faqs, faqsProducts, faqsFiles, incentivesProducts, circlesProducts, navigationWebsites, websites, feeds, feedsPosts, gamificationEvents, userProfile, integrationsReport, integrationsSpaces, invoicesAddress, paymentsCurrency, payments, pageBlocksFiles, pageBlocks, invoicesOrders, listsDirectusUsers, postgresstoresWebsites, productsCategories, manufacturerCountries, manufacturer, circlesPosts, platformPageBlocks, orderItems, orderItemsProducts, radios, radiosDepartments, profiles, usersInAuth, radiosMusicchart, ordersProducts, outletsCategories, outlets, paymentsDirectusUsers, relatedProductsProducts, relatedProducts, regionShippingAddress, shippingAddress, reportComments, reportDirectusUsers, reportFaqs, pickupLocations, pickupLocationsCity, pickupLocationsCountry, pickupLocationsState, shipment, financeIndexArticles, shipmentProducts, outletsShorts, reportPosts, productsCountries, productsCurrency, productsDepartments, productsManufacturer, productsDirectusUsers, shippingAddressesDirectusUsers, shippingAddresses, shippingAddressesOrders, productsProductDesigner, postgresstoresCollections, ratingsProducts, reactionsComments, reactions, productsWebsites, reactionsLists, reactionsDirectusUsers, reactionsPosts, reactionsShorts, reportProducts, shortsSpaces, sitePreferenceCountries, sitePreferenceDepartments, userFriendsPosts, userFriends, projectBoardProjects, emojiReactions, returnsOrders, returns, reviewsProducts, shipmentComments, projectBoardFiles, shipmentTracking, projectTimeline, projectsProjectTimeline, calendar, calendarDirectusUsers, shippingAddressesStates, shopsCategories, shopsComments, shopsCountries, shopsDepartments, shopsDirectusUsers, taxesCountries, taxes, taxesStates, translationsPostgresstores, translations, tagsShorts, tags, shopsFiles, shopsProducts, videosManufacturer, videosProducts, shortsDirectusUsers, spacesTags, spacesPosts, streams, tagsCategories, tagsDepartments, spacesFiles, cartProducts, brandsCategories, brandsDepartments, brandsManufacturer, brandsShorts, categoriesDepartments, collectionsProducts, commentsReactions, directusActivity, directusRevisions, directusPresets, directusSessions, eventsCountries, eventsFiles, eventsProducts, gamificationDirectusUsers, gamificationNotifications, notifications, gamificationProducts, invoicesShippingAddress, projectsRegion, projectsFiles, regionCountries, addressCountries, agreementsProducts, articlesCategories, articlesDepartments, productTypes, productTypesProducts, circlesDirectusUsers, connections, connectionsDirectusUsers, navigationPages, subscriptions, subscriptionsDirectusUsers, attributes, attributesProducts, orderItemsOrders, paymentsOrders, redirects, postgresstoresProducts, productsAttributes, followers, profilesFollowers, productsSpaces, productsTags, radiosCategories, crossSellProductsProducts, directusNotifications, regionAddress, shipmentAddress, returnsProducts, eventsDirectusUsers, shippingAddressesCities, shippingAddressesCountries, shopsAgreements, shopsShowcases, shortsFiles, sitePreferenceCategories, sitePreferenceProducts, listProducts, listProductsLists, paymentsCountries, musicchartDepartments, listsProducts, spacesDepartments, subscriptionsProducts, statesCities, streamsRatings, tagsArticles, tagsProducts, calendarLists, listsFiles, projectsLists, videosComments, departmentsShowcases, chat, aboutDepartmentsPlatform, profilesCountries, profilesStates, collectionsSpaces, listsTemplate, projectBoardComments, charts, chartEntries, mediaFoldersDirectusUsers, shortsProducts, integrationsPlatform, geoRegionsCities, geoRegions, geoRegionsStates, projectsComments, listsTemplates, videosTags, geoRegionsCountries, countriesCurrency, projectsCalendar, integrationsTags, integrationsCategories, listsTemplateTags, aboutDepartmentsPages, aboutDepartmentsArticles, tagsPosts, integrationsAttributes, profilesCities, integrationsProductTypes, eventsPosts, spacesLists, pollsSpaces, spacesLiveRooms, listItemsDirectusUsers, calendarIntegrations, projectsIntegrations, projectsProducts, calendarComments, calendarEvents, memberGroupsPosts, memberGroupsPolls, memberGroupsEvents, memberGroupsProducts, showcasesSpaces, attributesProductTypes, productAttributes, listsTypeLists, listsType, listsTypeCategories, chartsDepartments, chartsProducts, listsDepartments, chartsRadios, listsCategories, listsShorts, videosCategories, spacesDirectusUsers, videosDepartments, videosProductTypes, shopTypeShops, auctionLots, variants, showcasesProducts, directusSettings, listsTemplateDirectusUsers, listsTemplateListItems, federatedSpaces, federatedSpacesSpaces, bids, mediaFiles, vibezClips, vibezProductMap } from "./schema";

export const spacesRelations = relations(spaces, ({one, many}) => ({
	directusFile_coverImage: one(directusFiles, {
		fields: [spaces.coverImage],
		references: [directusFiles.id],
		relationName: "spaces_coverImage_directusFiles_id"
	}),
	directusFile_image: one(directusFiles, {
		fields: [spaces.image],
		references: [directusFiles.id],
		relationName: "spaces_image_directusFiles_id"
	}),
	directusUser_owner: one(directusUsers, {
		fields: [spaces.owner],
		references: [directusUsers.id],
		relationName: "spaces_owner_directusUsers_id"
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [spaces.userCreated],
		references: [directusUsers.id],
		relationName: "spaces_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [spaces.userUpdated],
		references: [directusUsers.id],
		relationName: "spaces_userUpdated_directusUsers_id"
	}),
	spacesShopTypes: many(spacesShopType),
	momentsSpaces: many(momentsSpaces),
	spacesTemplates: many(spacesTemplates),
	spacesCities: many(spacesCities),
	spacesArticles: many(spacesArticles),
	spacesStates: many(spacesStates),
	spacesCountries: many(spacesCountries),
	spacesSpaceTypes: many(spacesSpaceTypes),
	reportSpaces: many(reportSpaces),
	integrationsSpaces: many(integrationsSpaces),
	shortsSpaces: many(shortsSpaces),
	spacesTags: many(spacesTags),
	spacesPosts: many(spacesPosts),
	spacesFiles: many(spacesFiles),
	productsSpaces: many(productsSpaces),
	reactions: many(reactions),
	spacesDepartments: many(spacesDepartments),
	collectionsSpaces: many(collectionsSpaces),
	spacesLists: many(spacesLists),
	pollsSpaces: many(pollsSpaces),
	spacesLiveRooms: many(spacesLiveRooms),
	showcasesSpaces: many(showcasesSpaces),
	spacesDirectusUsers: many(spacesDirectusUsers),
	federatedSpacesSpaces: many(federatedSpacesSpaces),
}));

export const directusFilesRelations = relations(directusFiles, ({one, many}) => ({
	spaces_coverImage: many(spaces, {
		relationName: "spaces_coverImage_directusFiles_id"
	}),
	spaces_image: many(spaces, {
		relationName: "spaces_image_directusFiles_id"
	}),
	announcements: many(announcements),
	posts_audio: many(posts, {
		relationName: "posts_audio_directusFiles_id"
	}),
	posts_image: many(posts, {
		relationName: "posts_image_directusFiles_id"
	}),
	spaceTypes: many(spaceTypes),
	platforms: many(platform),
	directusFolder: one(directusFolders, {
		fields: [directusFiles.folder],
		references: [directusFolders.id]
	}),
	directusUser_modifiedBy: one(directusUsers, {
		fields: [directusFiles.modifiedBy],
		references: [directusUsers.id],
		relationName: "directusFiles_modifiedBy_directusUsers_id"
	}),
	directusUser_uploadedBy: one(directusUsers, {
		fields: [directusFiles.uploadedBy],
		references: [directusUsers.id],
		relationName: "directusFiles_uploadedBy_directusUsers_id"
	}),
	integrationsFiles: many(integrationsFiles),
	pageBlocksFiles: many(pageBlocksFiles),
	listItems: many(listItems),
	radios_file: many(radios, {
		relationName: "radios_file_directusFiles_id"
	}),
	radios_image: many(radios, {
		relationName: "radios_image_directusFiles_id"
	}),
	profiles: many(profiles),
	outlets: many(outlets),
	shorts: many(shorts),
	projects: many(projects),
	projectBoardFiles: many(projectBoardFiles),
	userProfiles: many(userProfile),
	spacesFiles: many(spacesFiles),
	brands: many(brands),
	events: many(events),
	eventsFiles: many(eventsFiles),
	projectsFiles: many(projectsFiles),
	ratings: many(ratings),
	reactions: many(reactions),
	shortsFiles: many(shortsFiles),
	listsFiles: many(listsFiles),
	chats: many(chat),
	videos_media: many(videos, {
		relationName: "videos_media_directusFiles_id"
	}),
	videos_thumbnail: many(videos, {
		relationName: "videos_thumbnail_directusFiles_id"
	}),
	polls: many(polls),
	calendars: many(calendar),
	charts: many(charts),
	directusSettings_projectLogo: many(directusSettings, {
		relationName: "directusSettings_projectLogo_directusFiles_id"
	}),
	directusSettings_publicBackground: many(directusSettings, {
		relationName: "directusSettings_publicBackground_directusFiles_id"
	}),
	directusSettings_publicFavicon: many(directusSettings, {
		relationName: "directusSettings_publicFavicon_directusFiles_id"
	}),
	directusSettings_publicForeground: many(directusSettings, {
		relationName: "directusSettings_publicForeground_directusFiles_id"
	}),
	mediaFiles: many(mediaFiles),
}));

export const directusUsersRelations = relations(directusUsers, ({one, many}) => ({
	spaces_owner: many(spaces, {
		relationName: "spaces_owner_directusUsers_id"
	}),
	spaces_userCreated: many(spaces, {
		relationName: "spaces_userCreated_directusUsers_id"
	}),
	spaces_userUpdated: many(spaces, {
		relationName: "spaces_userUpdated_directusUsers_id"
	}),
	announcements_userCreated: many(announcements, {
		relationName: "announcements_userCreated_directusUsers_id"
	}),
	announcements_userUpdated: many(announcements, {
		relationName: "announcements_userUpdated_directusUsers_id"
	}),
	mediaFolders_userCreated: many(mediaFolders, {
		relationName: "mediaFolders_userCreated_directusUsers_id"
	}),
	mediaFolders_user: many(mediaFolders, {
		relationName: "mediaFolders_user_directusUsers_id"
	}),
	mediaFolders_userUpdated: many(mediaFolders, {
		relationName: "mediaFolders_userUpdated_directusUsers_id"
	}),
	posts: many(posts),
	projectBoardDirectusUsers: many(projectBoardDirectusUsers),
	incentives: many(incentives),
	crossSellProducts: many(crossSellProducts),
	projectsDirectusUsers: many(projectsDirectusUsers),
	aiPrompts_userCreated: many(aiPrompts, {
		relationName: "aiPrompts_userCreated_directusUsers_id"
	}),
	aiPrompts_userUpdated: many(aiPrompts, {
		relationName: "aiPrompts_userUpdated_directusUsers_id"
	}),
	articles: many(articles),
	directusAccesses: many(directusAccess),
	directusComments_userCreated: many(directusComments, {
		relationName: "directusComments_userCreated_directusUsers_id"
	}),
	directusComments_userUpdated: many(directusComments, {
		relationName: "directusComments_userUpdated_directusUsers_id"
	}),
	directusOperations: many(directusOperations),
	directusFiles_modifiedBy: many(directusFiles, {
		relationName: "directusFiles_modifiedBy_directusUsers_id"
	}),
	directusFiles_uploadedBy: many(directusFiles, {
		relationName: "directusFiles_uploadedBy_directusUsers_id"
	}),
	directusPanels: many(directusPanels),
	directusShares: many(directusShares),
	directusVersions_userCreated: many(directusVersions, {
		relationName: "directusVersions_userCreated_directusUsers_id"
	}),
	directusVersions_userUpdated: many(directusVersions, {
		relationName: "directusVersions_userUpdated_directusUsers_id"
	}),
	faqsDirectusUsers: many(faqsDirectusUsers),
	gamifications_anniversaries: many(gamification, {
		relationName: "gamification_anniversaries_directusUsers_id"
	}),
	gamifications_birthdays: many(gamification, {
		relationName: "gamification_birthdays_directusUsers_id"
	}),
	gamifications_leaderboards: many(gamification, {
		relationName: "gamification_leaderboards_directusUsers_id"
	}),
	gamifications_nominationUser: many(gamification, {
		relationName: "gamification_nominationUser_directusUsers_id"
	}),
	gamifications_userCreated: many(gamification, {
		relationName: "gamification_userCreated_directusUsers_id"
	}),
	gamifications_userUpdated: many(gamification, {
		relationName: "gamification_userUpdated_directusUsers_id"
	}),
	listItems_userCreated: many(listItems, {
		relationName: "listItems_userCreated_directusUsers_id"
	}),
	listItems_userUpdated: many(listItems, {
		relationName: "listItems_userUpdated_directusUsers_id"
	}),
	radios_userCreated: many(radios, {
		relationName: "radios_userCreated_directusUsers_id"
	}),
	radios_userUpdated: many(radios, {
		relationName: "radios_userUpdated_directusUsers_id"
	}),
	profiles: many(profiles),
	orders: many(orders),
	paymentsDirectusUsers: many(paymentsDirectusUsers),
	shippingAddressesDirectusUsers: many(shippingAddressesDirectusUsers),
	projects_userCreated: many(projects, {
		relationName: "projects_userCreated_directusUsers_id"
	}),
	projects_userUpdated: many(projects, {
		relationName: "projects_userUpdated_directusUsers_id"
	}),
	calendarDirectusUsers: many(calendarDirectusUsers),
	userProfiles_user: many(userProfile, {
		relationName: "userProfile_user_directusUsers_id"
	}),
	userProfiles_userUpdated: many(userProfile, {
		relationName: "userProfile_userUpdated_directusUsers_id"
	}),
	comments: many(comments),
	directusPresets: many(directusPresets),
	directusSessions: many(directusSessions),
	events_userCreated: many(events, {
		relationName: "events_userCreated_directusUsers_id"
	}),
	events_userUpdated: many(events, {
		relationName: "events_userUpdated_directusUsers_id"
	}),
	directusRole: one(directusRoles, {
		fields: [directusUsers.role],
		references: [directusRoles.id]
	}),
	gamificationDirectusUsers: many(gamificationDirectusUsers),
	circlesDirectusUsers: many(circlesDirectusUsers),
	carts: many(cart),
	pageBlocks_userCreated: many(pageBlocks, {
		relationName: "pageBlocks_userCreated_directusUsers_id"
	}),
	pageBlocks_userUpdated: many(pageBlocks, {
		relationName: "pageBlocks_userUpdated_directusUsers_id"
	}),
	notifications: many(notifications),
	redirects_userCreated: many(redirects, {
		relationName: "redirects_userCreated_directusUsers_id"
	}),
	redirects_userUpdated: many(redirects, {
		relationName: "redirects_userUpdated_directusUsers_id"
	}),
	relatedProducts: many(relatedProducts),
	reactions_user: many(reactions, {
		relationName: "reactions_user_directusUsers_id"
	}),
	reactions_userId: many(reactions, {
		relationName: "reactions_userId_directusUsers_id"
	}),
	directusFlows: many(directusFlows),
	directusNotifications_recipient: many(directusNotifications, {
		relationName: "directusNotifications_recipient_directusUsers_id"
	}),
	directusNotifications_sender: many(directusNotifications, {
		relationName: "directusNotifications_sender_directusUsers_id"
	}),
	directusDashboards: many(directusDashboards),
	eventsDirectusUsers: many(eventsDirectusUsers),
	showcases: many(showcases),
	chats_userCreated: many(chat, {
		relationName: "chat_userCreated_directusUsers_id"
	}),
	chats_userUpdated: many(chat, {
		relationName: "chat_userUpdated_directusUsers_id"
	}),
	projectBoards_userCreated: many(projectBoard, {
		relationName: "projectBoard_userCreated_directusUsers_id"
	}),
	projectBoards_userUpdated: many(projectBoard, {
		relationName: "projectBoard_userUpdated_directusUsers_id"
	}),
	listsTemplates_userCreated: many(listsTemplate, {
		relationName: "listsTemplate_userCreated_directusUsers_id"
	}),
	listsTemplates_userUpdated: many(listsTemplate, {
		relationName: "listsTemplate_userUpdated_directusUsers_id"
	}),
	templates_userCreated: many(templates, {
		relationName: "templates_userCreated_directusUsers_id"
	}),
	templates_userUpdated: many(templates, {
		relationName: "templates_userUpdated_directusUsers_id"
	}),
	mediaFoldersDirectusUsers: many(mediaFoldersDirectusUsers),
	userFriends_friend: many(userFriends, {
		relationName: "userFriends_friend_directusUsers_id"
	}),
	userFriends_user: many(userFriends, {
		relationName: "userFriends_user_directusUsers_id"
	}),
	websites: many(websites),
	videos_userCreated: many(videos, {
		relationName: "videos_userCreated_directusUsers_id"
	}),
	videos_user: many(videos, {
		relationName: "videos_user_directusUsers_id"
	}),
	videos_userUpdated: many(videos, {
		relationName: "videos_userUpdated_directusUsers_id"
	}),
	polls_author: many(polls, {
		relationName: "polls_author_directusUsers_id"
	}),
	polls_userCreated: many(polls, {
		relationName: "polls_userCreated_directusUsers_id"
	}),
	polls_userUpdated: many(polls, {
		relationName: "polls_userUpdated_directusUsers_id"
	}),
	listItemsDirectusUsers: many(listItemsDirectusUsers),
	integrations_userCreated: many(integrations, {
		relationName: "integrations_userCreated_directusUsers_id"
	}),
	integrations_userUpdated: many(integrations, {
		relationName: "integrations_userUpdated_directusUsers_id"
	}),
	listsTypes_userCreated: many(listsType, {
		relationName: "listsType_userCreated_directusUsers_id"
	}),
	listsTypes_userUpdated: many(listsType, {
		relationName: "listsType_userUpdated_directusUsers_id"
	}),
	spacesDirectusUsers: many(spacesDirectusUsers),
	listsTemplateDirectusUsers: many(listsTemplateDirectusUsers),
	media_userCreated: many(media, {
		relationName: "media_userCreated_directusUsers_id"
	}),
	media_user: many(media, {
		relationName: "media_user_directusUsers_id"
	}),
	media_userUpdated: many(media, {
		relationName: "media_userUpdated_directusUsers_id"
	}),
}));

export const spacesShopTypeRelations = relations(spacesShopType, ({one}) => ({
	shopType: one(shopType, {
		fields: [spacesShopType.shopTypeId],
		references: [shopType.id]
	}),
	space: one(spaces, {
		fields: [spacesShopType.spacesId],
		references: [spaces.id]
	}),
}));

export const shopTypeRelations = relations(shopType, ({many}) => ({
	spacesShopTypes: many(spacesShopType),
	shopTypeShops: many(shopTypeShops),
}));

export const momentsSpacesRelations = relations(momentsSpaces, ({one}) => ({
	moment: one(moments, {
		fields: [momentsSpaces.momentsId],
		references: [moments.id]
	}),
	space: one(spaces, {
		fields: [momentsSpaces.spacesId],
		references: [spaces.id]
	}),
}));

export const momentsRelations = relations(moments, ({many}) => ({
	momentsSpaces: many(momentsSpaces),
	momentsProducts: many(momentsProducts),
}));

export const spacesTemplatesRelations = relations(spacesTemplates, ({one}) => ({
	space: one(spaces, {
		fields: [spacesTemplates.spacesId],
		references: [spaces.id]
	}),
	template: one(templates, {
		fields: [spacesTemplates.templatesId],
		references: [templates.id]
	}),
}));

export const templatesRelations = relations(templates, ({one, many}) => ({
	spacesTemplates: many(spacesTemplates),
	templatesSpaceTypes: many(templatesSpaceTypes),
	directusUser_userCreated: one(directusUsers, {
		fields: [templates.userCreated],
		references: [directusUsers.id],
		relationName: "templates_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [templates.userUpdated],
		references: [directusUsers.id],
		relationName: "templates_userUpdated_directusUsers_id"
	}),
	listsTemplates: many(listsTemplates),
}));

export const showcasesShopsRelations = relations(showcasesShops, ({one}) => ({
	shop: one(shops, {
		fields: [showcasesShops.shopsId],
		references: [shops.id]
	}),
	showcase: one(showcases, {
		fields: [showcasesShops.showcasesId],
		references: [showcases.id]
	}),
}));

export const shopsRelations = relations(shops, ({many}) => ({
	showcasesShops: many(showcasesShops),
	feeds: many(feeds),
	shopsCategories: many(shopsCategories),
	shopsComments: many(shopsComments),
	shopsCountries: many(shopsCountries),
	shopsDepartments: many(shopsDepartments),
	shopsDirectusUsers: many(shopsDirectusUsers),
	shopsFiles: many(shopsFiles),
	shopsProducts: many(shopsProducts),
	shopsAgreements: many(shopsAgreements),
	shopsShowcases: many(shopsShowcases),
	shopTypeShops: many(shopTypeShops),
}));

export const showcasesRelations = relations(showcases, ({one, many}) => ({
	showcasesShops: many(showcasesShops),
	shopsShowcases: many(shopsShowcases),
	directusUser: one(directusUsers, {
		fields: [showcases.owner],
		references: [directusUsers.id]
	}),
	departmentsShowcases: many(departmentsShowcases),
	showcasesSpaces: many(showcasesSpaces),
	showcasesProducts: many(showcasesProducts),
}));

export const addressCartRelations = relations(addressCart, ({one}) => ({
	address: one(address, {
		fields: [addressCart.addressId],
		references: [address.id]
	}),
	cart: one(cart, {
		fields: [addressCart.cartId],
		references: [cart.id]
	}),
}));

export const addressRelations = relations(address, ({many}) => ({
	addressCarts: many(addressCart),
	addressCities: many(addressCities),
	addressDirectusUsers: many(addressDirectusUsers),
	invoicesAddresses: many(invoicesAddress),
	addressCountries: many(addressCountries),
	regionAddresses: many(regionAddress),
	shipmentAddresses: many(shipmentAddress),
}));

export const cartRelations = relations(cart, ({one, many}) => ({
	addressCarts: many(addressCart),
	cartCartItems: many(cartCartItems),
	cartItems: many(cartItems),
	cartProducts: many(cartProducts),
	directusUser: one(directusUsers, {
		fields: [cart.user],
		references: [directusUsers.id]
	}),
}));

export const announcementsRelations = relations(announcements, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [announcements.image],
		references: [directusFiles.id]
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [announcements.userCreated],
		references: [directusUsers.id],
		relationName: "announcements_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [announcements.userUpdated],
		references: [directusUsers.id],
		relationName: "announcements_userUpdated_directusUsers_id"
	}),
}));

export const articlesCommentsRelations = relations(articlesComments, ({one}) => ({
	article: one(articles, {
		fields: [articlesComments.articlesId],
		references: [articles.id]
	}),
	comment: one(comments, {
		fields: [articlesComments.commentsId],
		references: [comments.id]
	}),
}));

export const articlesRelations = relations(articles, ({one, many}) => ({
	articlesComments: many(articlesComments),
	spacesArticles: many(spacesArticles),
	directusUser: one(directusUsers, {
		fields: [articles.author],
		references: [directusUsers.id]
	}),
	platformArticles: many(platformArticles),
	financeIndexArticles: many(financeIndexArticles),
	articlesCategories: many(articlesCategories),
	articlesDepartments: many(articlesDepartments),
	tagsArticles: many(tagsArticles),
	aboutDepartmentsArticles: many(aboutDepartmentsArticles),
}));

export const commentsRelations = relations(comments, ({one, many}) => ({
	articlesComments: many(articlesComments),
	commentsDirectusUsers: many(commentsDirectusUsers),
	commentsProducts: many(commentsProducts),
	commentsShorts: many(commentsShorts),
	reportComments: many(reportComments),
	reactionsComments: many(reactionsComments),
	shopsComments: many(shopsComments),
	directusUser: one(directusUsers, {
		fields: [comments.user],
		references: [directusUsers.id]
	}),
	commentsReactions: many(commentsReactions),
	videosComments: many(videosComments),
	projectBoardComments: many(projectBoardComments),
	projectsComments: many(projectsComments),
	calendarComments: many(calendarComments),
}));

export const mediaFoldersRelations = relations(mediaFolders, ({one, many}) => ({
	media: one(media, {
		fields: [mediaFolders.parentFolder],
		references: [media.id]
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [mediaFolders.userCreated],
		references: [directusUsers.id],
		relationName: "mediaFolders_userCreated_directusUsers_id"
	}),
	directusUser_user: one(directusUsers, {
		fields: [mediaFolders.user],
		references: [directusUsers.id],
		relationName: "mediaFolders_user_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [mediaFolders.userUpdated],
		references: [directusUsers.id],
		relationName: "mediaFolders_userUpdated_directusUsers_id"
	}),
	mediaFoldersDirectusUsers: many(mediaFoldersDirectusUsers),
}));

export const mediaRelations = relations(media, ({one, many}) => ({
	mediaFolders: many(mediaFolders),
	profile: one(profiles, {
		fields: [media.profileId],
		references: [profiles.id]
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [media.userCreated],
		references: [directusUsers.id],
		relationName: "media_userCreated_directusUsers_id"
	}),
	directusUser_user: one(directusUsers, {
		fields: [media.user],
		references: [directusUsers.id],
		relationName: "media_user_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [media.userUpdated],
		references: [directusUsers.id],
		relationName: "media_userUpdated_directusUsers_id"
	}),
	mediaFiles: many(mediaFiles),
}));

export const seasonsVideosRelations = relations(seasonsVideos, ({one}) => ({
	season: one(seasons, {
		fields: [seasonsVideos.seasonsId],
		references: [seasons.id]
	}),
	video: one(videos, {
		fields: [seasonsVideos.videosId],
		references: [videos.id]
	}),
}));

export const seasonsRelations = relations(seasons, ({one, many}) => ({
	seasonsVideos: many(seasonsVideos),
	video: one(videos, {
		fields: [seasons.name],
		references: [videos.id]
	}),
}));

export const videosRelations = relations(videos, ({one, many}) => ({
	seasonsVideos: many(seasonsVideos),
	gamificationVideos: many(gamificationVideos),
	videosManufacturers: many(videosManufacturer),
	videosProducts: many(videosProducts),
	streams: many(streams),
	reactions: many(reactions),
	seasons: many(seasons),
	videosComments: many(videosComments),
	videosTags: many(videosTags),
	attribute: one(attributes, {
		fields: [videos.distributor],
		references: [attributes.id]
	}),
	directusFile_media: one(directusFiles, {
		fields: [videos.media],
		references: [directusFiles.id],
		relationName: "videos_media_directusFiles_id"
	}),
	rating: one(ratings, {
		fields: [videos.ratings],
		references: [ratings.id]
	}),
	directusFile_thumbnail: one(directusFiles, {
		fields: [videos.thumbnail],
		references: [directusFiles.id],
		relationName: "videos_thumbnail_directusFiles_id"
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [videos.userCreated],
		references: [directusUsers.id],
		relationName: "videos_userCreated_directusUsers_id"
	}),
	directusUser_user: one(directusUsers, {
		fields: [videos.user],
		references: [directusUsers.id],
		relationName: "videos_user_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [videos.userUpdated],
		references: [directusUsers.id],
		relationName: "videos_userUpdated_directusUsers_id"
	}),
	videosCategories: many(videosCategories),
	videosDepartments: many(videosDepartments),
	videosProductTypes: many(videosProductTypes),
}));

export const spacesCitiesRelations = relations(spacesCities, ({one}) => ({
	city: one(cities, {
		fields: [spacesCities.citiesId],
		references: [cities.id]
	}),
	space: one(spaces, {
		fields: [spacesCities.spacesId],
		references: [spaces.id]
	}),
}));

export const citiesRelations = relations(cities, ({many}) => ({
	spacesCities: many(spacesCities),
	citiesCountries: many(citiesCountries),
	addressCities: many(addressCities),
	citiesStates: many(citiesStates),
	eventsCities: many(eventsCities),
	shippingAddressesCities: many(shippingAddressesCities),
	statesCities: many(statesCities),
	geoRegionsCities: many(geoRegionsCities),
	profilesCities: many(profilesCities),
}));

export const postsRelations = relations(posts, ({one, many}) => ({
	directusFile_audio: one(directusFiles, {
		fields: [posts.audio],
		references: [directusFiles.id],
		relationName: "posts_audio_directusFiles_id"
	}),
	directusUser: one(directusUsers, {
		fields: [posts.author],
		references: [directusUsers.id]
	}),
	directusFile_image: one(directusFiles, {
		fields: [posts.image],
		references: [directusFiles.id],
		relationName: "posts_image_directusFiles_id"
	}),
	postsPolls: many(postsPolls),
	feedsPosts: many(feedsPosts),
	listItems: many(listItems),
	circlesPosts: many(circlesPosts),
	reportPosts: many(reportPosts),
	reactionsPosts: many(reactionsPosts),
	userFriendsPosts: many(userFriendsPosts),
	spacesPosts: many(spacesPosts),
	reactions: many(reactions),
	tagsPosts: many(tagsPosts),
	eventsPosts: many(eventsPosts),
	memberGroupsPosts: many(memberGroupsPosts),
}));

export const countriesTimezonesRelations = relations(countriesTimezones, ({one}) => ({
	country: one(countries, {
		fields: [countriesTimezones.countriesId],
		references: [countries.id]
	}),
	timezone: one(timezones, {
		fields: [countriesTimezones.timezonesId],
		references: [timezones.id]
	}),
}));

export const countriesRelations = relations(countries, ({many}) => ({
	countriesTimezones: many(countriesTimezones),
	spacesCountries: many(spacesCountries),
	manufacturerCountries: many(manufacturerCountries),
	sitePreferenceCountries: many(sitePreferenceCountries),
	shopsCountries: many(shopsCountries),
	taxesCountries: many(taxesCountries),
	eventsCountries: many(eventsCountries),
	regionCountries: many(regionCountries),
	addressCountries: many(addressCountries),
	shippingAddressesCountries: many(shippingAddressesCountries),
	paymentsCountries: many(paymentsCountries),
	profilesCountries: many(profilesCountries),
	geoRegionsCountries: many(geoRegionsCountries),
	countriesCurrencies: many(countriesCurrency),
}));

export const timezonesRelations = relations(timezones, ({many}) => ({
	countriesTimezones: many(countriesTimezones),
}));

export const spacesArticlesRelations = relations(spacesArticles, ({one}) => ({
	article: one(articles, {
		fields: [spacesArticles.articlesId],
		references: [articles.id]
	}),
	space: one(spaces, {
		fields: [spacesArticles.spacesId],
		references: [spaces.id]
	}),
}));

export const spacesStatesRelations = relations(spacesStates, ({one}) => ({
	space: one(spaces, {
		fields: [spacesStates.spacesId],
		references: [spaces.id]
	}),
	state: one(states, {
		fields: [spacesStates.statesId],
		references: [states.id]
	}),
}));

export const statesRelations = relations(states, ({many}) => ({
	spacesStates: many(spacesStates),
	eventsStates: many(eventsStates),
	shippingAddressesStates: many(shippingAddressesStates),
	taxesStates: many(taxesStates),
	statesCities: many(statesCities),
	profilesStates: many(profilesStates),
	geoRegionsStates: many(geoRegionsStates),
}));

export const spacesCountriesRelations = relations(spacesCountries, ({one}) => ({
	country: one(countries, {
		fields: [spacesCountries.countriesId],
		references: [countries.id]
	}),
	space: one(spaces, {
		fields: [spacesCountries.spacesId],
		references: [spaces.id]
	}),
}));

export const brandsProductsRelations = relations(brandsProducts, ({one}) => ({
	brand: one(brands, {
		fields: [brandsProducts.brandsId],
		references: [brands.id]
	}),
	product: one(products, {
		fields: [brandsProducts.productsId],
		references: [products.id]
	}),
}));

export const brandsRelations = relations(brands, ({one, many}) => ({
	brandsProducts: many(brandsProducts),
	collectionsBrands: many(collectionsBrands),
	directusFile: one(directusFiles, {
		fields: [brands.image],
		references: [directusFiles.id]
	}),
	brandsCategories: many(brandsCategories),
	brandsDepartments: many(brandsDepartments),
	brandsManufacturers: many(brandsManufacturer),
	brandsShorts: many(brandsShorts),
}));

export const productsRelations = relations(products, ({many}) => ({
	brandsProducts: many(brandsProducts),
	couponsProducts: many(couponsProducts),
	momentsProducts: many(momentsProducts),
	spaceProducts: many(spaceProducts),
	platformProducts: many(platformProducts),
	cartItems: many(cartItems),
	commentsProducts: many(commentsProducts),
	departmentsProducts: many(departmentsProducts),
	listItemsProducts: many(listItemsProducts),
	faqsProducts: many(faqsProducts),
	incentivesProducts: many(incentivesProducts),
	circlesProducts: many(circlesProducts),
	productsCategories: many(productsCategories),
	orderItemsProducts: many(orderItemsProducts),
	ordersProducts: many(ordersProducts),
	relatedProductsProducts: many(relatedProductsProducts),
	shipmentProducts: many(shipmentProducts),
	productsCountries: many(productsCountries),
	productsCurrencies: many(productsCurrency),
	productsDepartments: many(productsDepartments),
	productsManufacturers: many(productsManufacturer),
	productsDirectusUsers: many(productsDirectusUsers),
	productsProductDesigners: many(productsProductDesigner),
	ratingsProducts: many(ratingsProducts),
	productsWebsites: many(productsWebsites),
	reportProducts: many(reportProducts),
	reviewsProducts: many(reviewsProducts),
	shopsProducts: many(shopsProducts),
	videosProducts: many(videosProducts),
	cartProducts: many(cartProducts),
	collectionsProducts: many(collectionsProducts),
	eventsProducts: many(eventsProducts),
	gamificationProducts: many(gamificationProducts),
	agreementsProducts: many(agreementsProducts),
	productTypesProducts: many(productTypesProducts),
	attributesProducts: many(attributesProducts),
	postgresstoresProducts: many(postgresstoresProducts),
	productsAttributes: many(productsAttributes),
	productsSpaces: many(productsSpaces),
	productsTags: many(productsTags),
	reactions: many(reactions),
	crossSellProductsProducts: many(crossSellProductsProducts),
	returnsProducts: many(returnsProducts),
	sitePreferenceProducts: many(sitePreferenceProducts),
	listsProducts: many(listsProducts),
	subscriptionsProducts: many(subscriptionsProducts),
	tagsProducts: many(tagsProducts),
	chartEntries: many(chartEntries),
	shortsProducts: many(shortsProducts),
	projectsProducts: many(projectsProducts),
	memberGroupsProducts: many(memberGroupsProducts),
	productAttributes: many(productAttributes),
	chartsProducts: many(chartsProducts),
	auctionLots: many(auctionLots),
	variants: many(variants),
	showcasesProducts: many(showcasesProducts),
	vibezProductMaps: many(vibezProductMap),
}));

export const citiesCountriesRelations = relations(citiesCountries, ({one}) => ({
	city: one(cities, {
		fields: [citiesCountries.citiesId],
		references: [cities.id]
	}),
}));

export const cartCartItemsRelations = relations(cartCartItems, ({one}) => ({
	cart: one(cart, {
		fields: [cartCartItems.cartId],
		references: [cart.id]
	}),
	cartItem: one(cartItems, {
		fields: [cartCartItems.cartItemsId],
		references: [cartItems.id]
	}),
}));

export const cartItemsRelations = relations(cartItems, ({one, many}) => ({
	cartCartItems: many(cartCartItems),
	cart: one(cart, {
		fields: [cartItems.cart],
		references: [cart.id]
	}),
	product: one(products, {
		fields: [cartItems.products],
		references: [products.id]
	}),
}));

export const templatesSpaceTypesRelations = relations(templatesSpaceTypes, ({one}) => ({
	spaceType: one(spaceTypes, {
		fields: [templatesSpaceTypes.spaceTypesId],
		references: [spaceTypes.id]
	}),
	template: one(templates, {
		fields: [templatesSpaceTypes.templatesId],
		references: [templates.id]
	}),
}));

export const spaceTypesRelations = relations(spaceTypes, ({one, many}) => ({
	templatesSpaceTypes: many(templatesSpaceTypes),
	directusFile: one(directusFiles, {
		fields: [spaceTypes.icon],
		references: [directusFiles.id]
	}),
	spacesSpaceTypes: many(spacesSpaceTypes),
}));

export const projectBoardDirectusUsersRelations = relations(projectBoardDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [projectBoardDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	projectBoard: one(projectBoard, {
		fields: [projectBoardDirectusUsers.projectBoardId],
		references: [projectBoard.id]
	}),
}));

export const projectBoardRelations = relations(projectBoard, ({one, many}) => ({
	projectBoardDirectusUsers: many(projectBoardDirectusUsers),
	projectBoardProjects: many(projectBoardProjects),
	projectBoardFiles: many(projectBoardFiles),
	directusUser_userCreated: one(directusUsers, {
		fields: [projectBoard.userCreated],
		references: [directusUsers.id],
		relationName: "projectBoard_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [projectBoard.userUpdated],
		references: [directusUsers.id],
		relationName: "projectBoard_userUpdated_directusUsers_id"
	}),
	projectBoardComments: many(projectBoardComments),
}));

export const postsPollsRelations = relations(postsPolls, ({one}) => ({
	poll: one(polls, {
		fields: [postsPolls.pollsId],
		references: [polls.id]
	}),
	post: one(posts, {
		fields: [postsPolls.postsId],
		references: [posts.id]
	}),
}));

export const pollsRelations = relations(polls, ({one, many}) => ({
	postsPolls: many(postsPolls),
	pollsSpaces: many(pollsSpaces),
	directusUser_author: one(directusUsers, {
		fields: [polls.author],
		references: [directusUsers.id],
		relationName: "polls_author_directusUsers_id"
	}),
	directusFile: one(directusFiles, {
		fields: [polls.image],
		references: [directusFiles.id]
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [polls.userCreated],
		references: [directusUsers.id],
		relationName: "polls_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [polls.userUpdated],
		references: [directusUsers.id],
		relationName: "polls_userUpdated_directusUsers_id"
	}),
	memberGroupsPolls: many(memberGroupsPolls),
}));

export const platformRelations = relations(platform, ({one, many}) => ({
	directusFile: one(directusFiles, {
		fields: [platform.image],
		references: [directusFiles.id]
	}),
	platformProducts: many(platformProducts),
	platformCategories: many(platformCategories),
	platformPages: many(platformPages),
	platformLists: many(platformLists),
	platformNavigations: many(platformNavigation),
	platformArticles: many(platformArticles),
	platformPageBlocks: many(platformPageBlocks),
	aboutDepartmentsPlatforms: many(aboutDepartmentsPlatform),
	integrationsPlatforms: many(integrationsPlatform),
}));

export const incentivesRelations = relations(incentives, ({one, many}) => ({
	directusUser: one(directusUsers, {
		fields: [incentives.userId],
		references: [directusUsers.id]
	}),
	incentivesCurrencies: many(incentivesCurrency),
	incentivesOrders: many(incentivesOrders),
	incentivesProducts: many(incentivesProducts),
}));

export const incentivesCurrencyRelations = relations(incentivesCurrency, ({one}) => ({
	currency: one(currency, {
		fields: [incentivesCurrency.currencyId],
		references: [currency.id]
	}),
	incentive: one(incentives, {
		fields: [incentivesCurrency.incentivesId],
		references: [incentives.id]
	}),
}));

export const currencyRelations = relations(currency, ({many}) => ({
	incentivesCurrencies: many(incentivesCurrency),
	financeIndexCurrencies: many(financeIndexCurrency),
	currencyDepartments: many(currencyDepartments),
	transactionsCurrencies: many(transactionsCurrency),
	paymentsCurrencies: many(paymentsCurrency),
	productsCurrencies: many(productsCurrency),
	countriesCurrencies: many(countriesCurrency),
}));

export const couponsProductsRelations = relations(couponsProducts, ({one}) => ({
	product: one(products, {
		fields: [couponsProducts.productsId],
		references: [products.id]
	}),
}));

export const crossSellProductsRelations = relations(crossSellProducts, ({one, many}) => ({
	directusUser: one(directusUsers, {
		fields: [crossSellProducts.user],
		references: [directusUsers.id]
	}),
	crossSellProductsProducts: many(crossSellProductsProducts),
}));

export const momentsProductsRelations = relations(momentsProducts, ({one}) => ({
	moment: one(moments, {
		fields: [momentsProducts.momentsId],
		references: [moments.id]
	}),
	product: one(products, {
		fields: [momentsProducts.productsId],
		references: [products.id]
	}),
}));

export const spacesSpaceTypesRelations = relations(spacesSpaceTypes, ({one}) => ({
	spaceType: one(spaceTypes, {
		fields: [spacesSpaceTypes.spaceTypesId],
		references: [spaceTypes.id]
	}),
	space: one(spaces, {
		fields: [spacesSpaceTypes.spacesId],
		references: [spaces.id]
	}),
}));

export const projectsDirectusUsersRelations = relations(projectsDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [projectsDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	project: one(projects, {
		fields: [projectsDirectusUsers.projectsId],
		references: [projects.id]
	}),
}));

export const projectsRelations = relations(projects, ({one, many}) => ({
	projectsDirectusUsers: many(projectsDirectusUsers),
	projectBoardProjects: many(projectBoardProjects),
	directusFile: one(directusFiles, {
		fields: [projects.icon],
		references: [directusFiles.id]
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [projects.userCreated],
		references: [directusUsers.id],
		relationName: "projects_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [projects.userUpdated],
		references: [directusUsers.id],
		relationName: "projects_userUpdated_directusUsers_id"
	}),
	projectsProjectTimelines: many(projectsProjectTimeline),
	projectsRegions: many(projectsRegion),
	projectsFiles: many(projectsFiles),
	projectsLists: many(projectsLists),
	projectsComments: many(projectsComments),
	projectsCalendars: many(projectsCalendar),
	projectsIntegrations: many(projectsIntegrations),
	projectsProducts: many(projectsProducts),
}));

export const addressCitiesRelations = relations(addressCities, ({one}) => ({
	address: one(address, {
		fields: [addressCities.addressId],
		references: [address.id]
	}),
	city: one(cities, {
		fields: [addressCities.citiesId],
		references: [cities.id]
	}),
}));

export const aiPromptsRelations = relations(aiPrompts, ({one}) => ({
	directusUser_userCreated: one(directusUsers, {
		fields: [aiPrompts.userCreated],
		references: [directusUsers.id],
		relationName: "aiPrompts_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [aiPrompts.userUpdated],
		references: [directusUsers.id],
		relationName: "aiPrompts_userUpdated_directusUsers_id"
	}),
}));

export const spaceProductsRelations = relations(spaceProducts, ({one}) => ({
	product: one(products, {
		fields: [spaceProducts.productsId],
		references: [products.id]
	}),
}));

export const platformProductsRelations = relations(platformProducts, ({one}) => ({
	platform: one(platform, {
		fields: [platformProducts.platformId],
		references: [platform.id]
	}),
	product: one(products, {
		fields: [platformProducts.productsId],
		references: [products.id]
	}),
}));

export const addressDirectusUsersRelations = relations(addressDirectusUsers, ({one}) => ({
	address: one(address, {
		fields: [addressDirectusUsers.addressId],
		references: [address.id]
	}),
}));

export const financeIndexRegionRelations = relations(financeIndexRegion, ({one}) => ({
	financeIndex: one(financeIndex, {
		fields: [financeIndexRegion.financeIndexId],
		references: [financeIndex.id]
	}),
	region: one(region, {
		fields: [financeIndexRegion.regionId],
		references: [region.id]
	}),
}));

export const financeIndexRelations = relations(financeIndex, ({many}) => ({
	financeIndexRegions: many(financeIndexRegion),
	financeIndexCurrencies: many(financeIndexCurrency),
	financeIndexArticles: many(financeIndexArticles),
}));

export const regionRelations = relations(region, ({many}) => ({
	financeIndexRegions: many(financeIndexRegion),
	regionShippingAddresses: many(regionShippingAddress),
	projectsRegions: many(projectsRegion),
	regionCountries: many(regionCountries),
	regionAddresses: many(regionAddress),
}));

export const financeIndexCurrencyRelations = relations(financeIndexCurrency, ({one}) => ({
	currency: one(currency, {
		fields: [financeIndexCurrency.currencyId],
		references: [currency.id]
	}),
	financeIndex: one(financeIndex, {
		fields: [financeIndexCurrency.financeIndexId],
		references: [financeIndex.id]
	}),
}));

export const citiesStatesRelations = relations(citiesStates, ({one}) => ({
	city: one(cities, {
		fields: [citiesStates.citiesId],
		references: [cities.id]
	}),
}));

export const commentsDirectusUsersRelations = relations(commentsDirectusUsers, ({one}) => ({
	comment: one(comments, {
		fields: [commentsDirectusUsers.commentId],
		references: [comments.id]
	}),
}));

export const collectionsBrandsRelations = relations(collectionsBrands, ({one}) => ({
	brand: one(brands, {
		fields: [collectionsBrands.brandsId],
		references: [brands.id]
	}),
	collection: one(collections, {
		fields: [collectionsBrands.collectionsId],
		references: [collections.id]
	}),
}));

export const collectionsRelations = relations(collections, ({many}) => ({
	collectionsBrands: many(collectionsBrands),
	departmentsCollections: many(departmentsCollections),
	postgresstoresCollections: many(postgresstoresCollections),
	collectionsProducts: many(collectionsProducts),
	collectionsSpaces: many(collectionsSpaces),
}));

export const commentsProductsRelations = relations(commentsProducts, ({one}) => ({
	comment: one(comments, {
		fields: [commentsProducts.commentsId],
		references: [comments.id]
	}),
	product: one(products, {
		fields: [commentsProducts.productsId],
		references: [products.id]
	}),
}));

export const commentsShortsRelations = relations(commentsShorts, ({one}) => ({
	comment: one(comments, {
		fields: [commentsShorts.commentsId],
		references: [comments.id]
	}),
	short: one(shorts, {
		fields: [commentsShorts.shortsId],
		references: [shorts.id]
	}),
}));

export const shortsRelations = relations(shorts, ({one, many}) => ({
	commentsShorts: many(commentsShorts),
	categoriesShorts: many(categoriesShorts),
	departmentsShorts: many(departmentsShorts),
	outletsShorts: many(outletsShorts),
	directusFile: one(directusFiles, {
		fields: [shorts.video],
		references: [directusFiles.id]
	}),
	reactionsShorts: many(reactionsShorts),
	shortsSpaces: many(shortsSpaces),
	tagsShorts: many(tagsShorts),
	shortsDirectusUsers: many(shortsDirectusUsers),
	brandsShorts: many(brandsShorts),
	shortsFiles: many(shortsFiles),
	shortsProducts: many(shortsProducts),
	listsShorts: many(listsShorts),
}));

export const categoriesShortsRelations = relations(categoriesShorts, ({one}) => ({
	category: one(categories, {
		fields: [categoriesShorts.categoriesId],
		references: [categories.id]
	}),
	short: one(shorts, {
		fields: [categoriesShorts.shortsId],
		references: [shorts.id]
	}),
}));

export const categoriesRelations = relations(categories, ({many}) => ({
	categoriesShorts: many(categoriesShorts),
	categoriesPostgresstores: many(categoriesPostgresstores),
	departmentsCategories: many(departmentsCategories),
	platformCategories: many(platformCategories),
	productsCategories: many(productsCategories),
	outletsCategories: many(outletsCategories),
	shopsCategories: many(shopsCategories),
	tagsCategories: many(tagsCategories),
	brandsCategories: many(brandsCategories),
	categoriesDepartments: many(categoriesDepartments),
	articlesCategories: many(articlesCategories),
	radiosCategories: many(radiosCategories),
	sitePreferenceCategories: many(sitePreferenceCategories),
	integrationsCategories: many(integrationsCategories),
	listsTypeCategories: many(listsTypeCategories),
	listsCategories: many(listsCategories),
	videosCategories: many(videosCategories),
}));

export const categoriesPostgresstoresRelations = relations(categoriesPostgresstores, ({one}) => ({
	category: one(categories, {
		fields: [categoriesPostgresstores.categoriesId],
		references: [categories.id]
	}),
	postgresstore: one(postgresstores, {
		fields: [categoriesPostgresstores.postgresstoresId],
		references: [postgresstores.id]
	}),
}));

export const postgresstoresRelations = relations(postgresstores, ({many}) => ({
	categoriesPostgresstores: many(categoriesPostgresstores),
	postgresstoresWebsites: many(postgresstoresWebsites),
	postgresstoresCollections: many(postgresstoresCollections),
	translationsPostgresstores: many(translationsPostgresstores),
	postgresstoresProducts: many(postgresstoresProducts),
}));

export const currencyDepartmentsRelations = relations(currencyDepartments, ({one}) => ({
	currency: one(currency, {
		fields: [currencyDepartments.currencyId],
		references: [currency.id]
	}),
	department: one(departments, {
		fields: [currencyDepartments.departmentsId],
		references: [departments.id]
	}),
}));

export const departmentsRelations = relations(departments, ({many}) => ({
	currencyDepartments: many(currencyDepartments),
	departmentsCategories: many(departmentsCategories),
	departmentsCollections: many(departmentsCollections),
	departmentsProducts: many(departmentsProducts),
	departmentsShorts: many(departmentsShorts),
	integrationsDepartments: many(integrationsDepartments),
	radiosDepartments: many(radiosDepartments),
	productsDepartments: many(productsDepartments),
	sitePreferenceDepartments: many(sitePreferenceDepartments),
	shopsDepartments: many(shopsDepartments),
	tagsDepartments: many(tagsDepartments),
	brandsDepartments: many(brandsDepartments),
	categoriesDepartments: many(categoriesDepartments),
	articlesDepartments: many(articlesDepartments),
	musicchartDepartments: many(musicchartDepartments),
	spacesDepartments: many(spacesDepartments),
	departmentsShowcases: many(departmentsShowcases),
	chartsDepartments: many(chartsDepartments),
	listsDepartments: many(listsDepartments),
	videosDepartments: many(videosDepartments),
}));

export const directusAccessRelations = relations(directusAccess, ({one}) => ({
	directusPolicy: one(directusPolicies, {
		fields: [directusAccess.policy],
		references: [directusPolicies.id]
	}),
	directusRole: one(directusRoles, {
		fields: [directusAccess.role],
		references: [directusRoles.id]
	}),
	directusUser: one(directusUsers, {
		fields: [directusAccess.user],
		references: [directusUsers.id]
	}),
}));

export const directusPoliciesRelations = relations(directusPolicies, ({many}) => ({
	directusAccesses: many(directusAccess),
	directusPermissions: many(directusPermissions),
}));

export const directusRolesRelations = relations(directusRoles, ({one, many}) => ({
	directusAccesses: many(directusAccess),
	directusShares: many(directusShares),
	profiles: many(profiles),
	directusPresets: many(directusPresets),
	directusRole: one(directusRoles, {
		fields: [directusRoles.parent],
		references: [directusRoles.id],
		relationName: "directusRoles_parent_directusRoles_id"
	}),
	directusRoles: many(directusRoles, {
		relationName: "directusRoles_parent_directusRoles_id"
	}),
	directusUsers: many(directusUsers),
	directusSettings: many(directusSettings),
}));

export const departmentsCategoriesRelations = relations(departmentsCategories, ({one}) => ({
	category: one(categories, {
		fields: [departmentsCategories.categoriesId],
		references: [categories.id]
	}),
	department: one(departments, {
		fields: [departmentsCategories.departmentsId],
		references: [departments.id]
	}),
}));

export const departmentsCollectionsRelations = relations(departmentsCollections, ({one}) => ({
	collection: one(collections, {
		fields: [departmentsCollections.collectionsId],
		references: [collections.id]
	}),
	department: one(departments, {
		fields: [departmentsCollections.departmentsId],
		references: [departments.id]
	}),
}));

export const departmentsProductsRelations = relations(departmentsProducts, ({one}) => ({
	department: one(departments, {
		fields: [departmentsProducts.departmentsId],
		references: [departments.id]
	}),
	product: one(products, {
		fields: [departmentsProducts.productsId],
		references: [products.id]
	}),
}));

export const directusCommentsRelations = relations(directusComments, ({one}) => ({
	directusUser_userCreated: one(directusUsers, {
		fields: [directusComments.userCreated],
		references: [directusUsers.id],
		relationName: "directusComments_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [directusComments.userUpdated],
		references: [directusUsers.id],
		relationName: "directusComments_userUpdated_directusUsers_id"
	}),
}));

export const departmentsShortsRelations = relations(departmentsShorts, ({one}) => ({
	department: one(departments, {
		fields: [departmentsShorts.departmentsId],
		references: [departments.id]
	}),
	short: one(shorts, {
		fields: [departmentsShorts.shortsId],
		references: [shorts.id]
	}),
}));

export const platformCategoriesRelations = relations(platformCategories, ({one}) => ({
	category: one(categories, {
		fields: [platformCategories.categoriesId],
		references: [categories.id]
	}),
	platform: one(platform, {
		fields: [platformCategories.platformId],
		references: [platform.id]
	}),
}));

export const eventsListsRelations = relations(eventsLists, ({one}) => ({
	event: one(events, {
		fields: [eventsLists.eventsId],
		references: [events.id]
	}),
	list: one(lists, {
		fields: [eventsLists.listsId],
		references: [lists.id]
	}),
}));

export const eventsRelations = relations(events, ({one, many}) => ({
	eventsLists: many(eventsLists),
	eventsInvoices: many(eventsInvoices),
	eventsCoupons: many(eventsCoupons),
	eventsCities: many(eventsCities),
	eventsStates: many(eventsStates),
	gamificationEvents: many(gamificationEvents),
	directusFile: one(directusFiles, {
		fields: [events.image],
		references: [directusFiles.id]
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [events.userCreated],
		references: [directusUsers.id],
		relationName: "events_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [events.userUpdated],
		references: [directusUsers.id],
		relationName: "events_userUpdated_directusUsers_id"
	}),
	eventsCountries: many(eventsCountries),
	eventsFiles: many(eventsFiles),
	eventsProducts: many(eventsProducts),
	eventsDirectusUsers: many(eventsDirectusUsers),
	eventsPosts: many(eventsPosts),
	calendarEvents: many(calendarEvents),
	memberGroupsEvents: many(memberGroupsEvents),
}));

export const listsRelations = relations(lists, ({many}) => ({
	eventsLists: many(eventsLists),
	platformLists: many(platformLists),
	listItems: many(listItems),
	listsDirectusUsers: many(listsDirectusUsers),
	reactionsLists: many(reactionsLists),
	reactions: many(reactions),
	listProductsLists: many(listProductsLists),
	listsProducts: many(listsProducts),
	calendarLists: many(calendarLists),
	listsFiles: many(listsFiles),
	projectsLists: many(projectsLists),
	listsTemplates: many(listsTemplates),
	spacesLists: many(spacesLists),
	listsTypeLists: many(listsTypeLists),
	listsDepartments: many(listsDepartments),
	listsCategories: many(listsCategories),
	listsShorts: many(listsShorts),
}));

export const eventsInvoicesRelations = relations(eventsInvoices, ({one}) => ({
	event: one(events, {
		fields: [eventsInvoices.eventsId],
		references: [events.id]
	}),
	invoice: one(invoices, {
		fields: [eventsInvoices.invoicesId],
		references: [invoices.id]
	}),
}));

export const invoicesRelations = relations(invoices, ({many}) => ({
	eventsInvoices: many(eventsInvoices),
	invoicesAddresses: many(invoicesAddress),
	invoicesOrders: many(invoicesOrders),
	invoicesShippingAddresses: many(invoicesShippingAddress),
}));

export const directusCollectionsRelations = relations(directusCollections, ({one, many}) => ({
	directusCollection: one(directusCollections, {
		fields: [directusCollections.group],
		references: [directusCollections.collection],
		relationName: "directusCollections_group_directusCollections_collection"
	}),
	directusCollections: many(directusCollections, {
		relationName: "directusCollections_group_directusCollections_collection"
	}),
	directusShares: many(directusShares),
	directusVersions: many(directusVersions),
}));

export const directusOperationsRelations = relations(directusOperations, ({one, many}) => ({
	directusFlow: one(directusFlows, {
		fields: [directusOperations.flow],
		references: [directusFlows.id]
	}),
	directusOperation_reject: one(directusOperations, {
		fields: [directusOperations.reject],
		references: [directusOperations.id],
		relationName: "directusOperations_reject_directusOperations_id"
	}),
	directusOperations_reject: many(directusOperations, {
		relationName: "directusOperations_reject_directusOperations_id"
	}),
	directusOperation_resolve: one(directusOperations, {
		fields: [directusOperations.resolve],
		references: [directusOperations.id],
		relationName: "directusOperations_resolve_directusOperations_id"
	}),
	directusOperations_resolve: many(directusOperations, {
		relationName: "directusOperations_resolve_directusOperations_id"
	}),
	directusUser: one(directusUsers, {
		fields: [directusOperations.userCreated],
		references: [directusUsers.id]
	}),
}));

export const directusFlowsRelations = relations(directusFlows, ({one, many}) => ({
	directusOperations: many(directusOperations),
	directusWebhooks: many(directusWebhooks),
	directusUser: one(directusUsers, {
		fields: [directusFlows.userCreated],
		references: [directusUsers.id]
	}),
}));

export const platformPagesRelations = relations(platformPages, ({one}) => ({
	page: one(pages, {
		fields: [platformPages.pagesId],
		references: [pages.id]
	}),
	platform: one(platform, {
		fields: [platformPages.platformId],
		references: [platform.id]
	}),
}));

export const pagesRelations = relations(pages, ({many}) => ({
	platformPages: many(platformPages),
	navigationPages: many(navigationPages),
	aboutDepartmentsPages: many(aboutDepartmentsPages),
}));

export const directusFoldersRelations = relations(directusFolders, ({one, many}) => ({
	directusFiles: many(directusFiles),
	directusFolder: one(directusFolders, {
		fields: [directusFolders.parent],
		references: [directusFolders.id],
		relationName: "directusFolders_parent_directusFolders_id"
	}),
	directusFolders: many(directusFolders, {
		relationName: "directusFolders_parent_directusFolders_id"
	}),
	directusSettings: many(directusSettings),
}));

export const directusPanelsRelations = relations(directusPanels, ({one}) => ({
	directusDashboard: one(directusDashboards, {
		fields: [directusPanels.dashboard],
		references: [directusDashboards.id]
	}),
	directusUser: one(directusUsers, {
		fields: [directusPanels.userCreated],
		references: [directusUsers.id]
	}),
}));

export const directusDashboardsRelations = relations(directusDashboards, ({one, many}) => ({
	directusPanels: many(directusPanels),
	directusUser: one(directusUsers, {
		fields: [directusDashboards.userCreated],
		references: [directusUsers.id]
	}),
}));

export const platformListsRelations = relations(platformLists, ({one}) => ({
	list: one(lists, {
		fields: [platformLists.listsId],
		references: [lists.id]
	}),
	platform: one(platform, {
		fields: [platformLists.platformId],
		references: [platform.id]
	}),
}));

export const gamificationVideosRelations = relations(gamificationVideos, ({one}) => ({
	gamification: one(gamification, {
		fields: [gamificationVideos.gamificationId],
		references: [gamification.id]
	}),
	video: one(videos, {
		fields: [gamificationVideos.videosId],
		references: [videos.id]
	}),
}));

export const gamificationRelations = relations(gamification, ({one, many}) => ({
	gamificationVideos: many(gamificationVideos),
	gamificationEvents: many(gamificationEvents),
	directusUser_anniversaries: one(directusUsers, {
		fields: [gamification.anniversaries],
		references: [directusUsers.id],
		relationName: "gamification_anniversaries_directusUsers_id"
	}),
	directusUser_birthdays: one(directusUsers, {
		fields: [gamification.birthdays],
		references: [directusUsers.id],
		relationName: "gamification_birthdays_directusUsers_id"
	}),
	directusUser_leaderboards: one(directusUsers, {
		fields: [gamification.leaderboards],
		references: [directusUsers.id],
		relationName: "gamification_leaderboards_directusUsers_id"
	}),
	directusUser_nominationUser: one(directusUsers, {
		fields: [gamification.nominationUser],
		references: [directusUsers.id],
		relationName: "gamification_nominationUser_directusUsers_id"
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [gamification.userCreated],
		references: [directusUsers.id],
		relationName: "gamification_userCreated_directusUsers_id"
	}),
	userProfile: one(userProfile, {
		fields: [gamification.userProfile],
		references: [userProfile.id]
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [gamification.userUpdated],
		references: [directusUsers.id],
		relationName: "gamification_userUpdated_directusUsers_id"
	}),
	gamificationDirectusUsers: many(gamificationDirectusUsers),
	gamificationNotifications: many(gamificationNotifications),
	gamificationProducts: many(gamificationProducts),
}));

export const integrationsDepartmentsRelations = relations(integrationsDepartments, ({one}) => ({
	department: one(departments, {
		fields: [integrationsDepartments.departmentsId],
		references: [departments.id]
	}),
	integration: one(integrations, {
		fields: [integrationsDepartments.integrationsId],
		references: [integrations.id]
	}),
}));

export const integrationsRelations = relations(integrations, ({one, many}) => ({
	integrationsDepartments: many(integrationsDepartments),
	integrationsRatings: many(integrationsRatings),
	integrationsFiles: many(integrationsFiles),
	integrationsReports: many(integrationsReport),
	integrationsSpaces: many(integrationsSpaces),
	integrationsPlatforms: many(integrationsPlatform),
	integrationsTags: many(integrationsTags),
	integrationsCategories: many(integrationsCategories),
	integrationsAttributes: many(integrationsAttributes),
	integrationsProductTypes: many(integrationsProductTypes),
	calendarIntegrations: many(calendarIntegrations),
	projectsIntegrations: many(projectsIntegrations),
	directusUser_userCreated: one(directusUsers, {
		fields: [integrations.userCreated],
		references: [directusUsers.id],
		relationName: "integrations_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [integrations.userUpdated],
		references: [directusUsers.id],
		relationName: "integrations_userUpdated_directusUsers_id"
	}),
}));

export const integrationsRatingsRelations = relations(integrationsRatings, ({one}) => ({
	integration: one(integrations, {
		fields: [integrationsRatings.integrationsId],
		references: [integrations.id]
	}),
	rating: one(ratings, {
		fields: [integrationsRatings.ratingsId],
		references: [ratings.id]
	}),
}));

export const ratingsRelations = relations(ratings, ({one, many}) => ({
	integrationsRatings: many(integrationsRatings),
	ratingsProducts: many(ratingsProducts),
	directusFile: one(directusFiles, {
		fields: [ratings.image],
		references: [directusFiles.id]
	}),
	streamsRatings: many(streamsRatings),
	videos: many(videos),
}));

export const integrationsFilesRelations = relations(integrationsFiles, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [integrationsFiles.directusFilesId],
		references: [directusFiles.id]
	}),
	integration: one(integrations, {
		fields: [integrationsFiles.integrationsId],
		references: [integrations.id]
	}),
}));

export const transactionsCurrencyRelations = relations(transactionsCurrency, ({one}) => ({
	currency: one(currency, {
		fields: [transactionsCurrency.currencyId],
		references: [currency.id]
	}),
	transaction: one(transactions, {
		fields: [transactionsCurrency.transactionsId],
		references: [transactions.id]
	}),
}));

export const transactionsRelations = relations(transactions, ({one, many}) => ({
	transactionsCurrencies: many(transactionsCurrency),
	order: one(orders, {
		fields: [transactions.order],
		references: [orders.id]
	}),
}));

export const directusPermissionsRelations = relations(directusPermissions, ({one}) => ({
	directusPolicy: one(directusPolicies, {
		fields: [directusPermissions.policy],
		references: [directusPolicies.id]
	}),
}));

export const platformNavigationRelations = relations(platformNavigation, ({one}) => ({
	navigation: one(navigation, {
		fields: [platformNavigation.navigationId],
		references: [navigation.id]
	}),
	platform: one(platform, {
		fields: [platformNavigation.platformId],
		references: [platform.id]
	}),
}));

export const navigationRelations = relations(navigation, ({many}) => ({
	platformNavigations: many(platformNavigation),
	navigationWebsites: many(navigationWebsites),
	navigationPages: many(navigationPages),
}));

export const directusWebhooksRelations = relations(directusWebhooks, ({one}) => ({
	directusFlow: one(directusFlows, {
		fields: [directusWebhooks.migratedFlow],
		references: [directusFlows.id]
	}),
}));

export const incentivesOrdersRelations = relations(incentivesOrders, ({one}) => ({
	incentive: one(incentives, {
		fields: [incentivesOrders.incentivesId],
		references: [incentives.id]
	}),
	order: one(orders, {
		fields: [incentivesOrders.ordersId],
		references: [orders.id]
	}),
}));

export const ordersRelations = relations(orders, ({one, many}) => ({
	incentivesOrders: many(incentivesOrders),
	invoicesOrders: many(invoicesOrders),
	ordersProducts: many(ordersProducts),
	directusUser: one(directusUsers, {
		fields: [orders.userId],
		references: [directusUsers.id]
	}),
	shipments: many(shipment),
	shippingAddressesOrders: many(shippingAddressesOrders),
	returnsOrders: many(returnsOrders),
	orderItemsOrders: many(orderItemsOrders),
	paymentsOrders: many(paymentsOrders),
	transactions: many(transactions),
}));

export const directusSharesRelations = relations(directusShares, ({one, many}) => ({
	directusCollection: one(directusCollections, {
		fields: [directusShares.collection],
		references: [directusCollections.collection]
	}),
	directusRole: one(directusRoles, {
		fields: [directusShares.role],
		references: [directusRoles.id]
	}),
	directusUser: one(directusUsers, {
		fields: [directusShares.userCreated],
		references: [directusUsers.id]
	}),
	directusSessions: many(directusSessions),
}));

export const reportSpacesRelations = relations(reportSpaces, ({one}) => ({
	report: one(report, {
		fields: [reportSpaces.reportId],
		references: [report.id]
	}),
	space: one(spaces, {
		fields: [reportSpaces.spacesId],
		references: [spaces.id]
	}),
}));

export const reportRelations = relations(report, ({many}) => ({
	reportSpaces: many(reportSpaces),
	integrationsReports: many(integrationsReport),
	reportComments: many(reportComments),
	reportDirectusUsers: many(reportDirectusUsers),
	reportFaqs: many(reportFaqs),
	reportPosts: many(reportPosts),
	reportProducts: many(reportProducts),
}));

export const listItemsProductsRelations = relations(listItemsProducts, ({one}) => ({
	listItem: one(listItems, {
		fields: [listItemsProducts.listItemsId],
		references: [listItems.id]
	}),
	product: one(products, {
		fields: [listItemsProducts.productsId],
		references: [products.id]
	}),
}));

export const listItemsRelations = relations(listItems, ({one, many}) => ({
	listItemsProducts: many(listItemsProducts),
	list: one(lists, {
		fields: [listItems.listId],
		references: [lists.id]
	}),
	directusFile: one(directusFiles, {
		fields: [listItems.media],
		references: [directusFiles.id]
	}),
	post: one(posts, {
		fields: [listItems.postId],
		references: [posts.id]
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [listItems.userCreated],
		references: [directusUsers.id],
		relationName: "listItems_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [listItems.userUpdated],
		references: [directusUsers.id],
		relationName: "listItems_userUpdated_directusUsers_id"
	}),
	listItemsDirectusUsers: many(listItemsDirectusUsers),
	listsTemplateListItems: many(listsTemplateListItems),
}));

export const platformArticlesRelations = relations(platformArticles, ({one}) => ({
	article: one(articles, {
		fields: [platformArticles.articlesId],
		references: [articles.id]
	}),
	platform: one(platform, {
		fields: [platformArticles.platformId],
		references: [platform.id]
	}),
}));

export const directusVersionsRelations = relations(directusVersions, ({one, many}) => ({
	directusCollection: one(directusCollections, {
		fields: [directusVersions.collection],
		references: [directusCollections.collection]
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [directusVersions.userCreated],
		references: [directusUsers.id],
		relationName: "directusVersions_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [directusVersions.userUpdated],
		references: [directusUsers.id],
		relationName: "directusVersions_userUpdated_directusUsers_id"
	}),
	directusRevisions: many(directusRevisions),
}));

export const eventsCouponsRelations = relations(eventsCoupons, ({one}) => ({
	event: one(events, {
		fields: [eventsCoupons.eventsId],
		references: [events.id]
	}),
}));

export const eventsCitiesRelations = relations(eventsCities, ({one}) => ({
	city: one(cities, {
		fields: [eventsCities.citiesId],
		references: [cities.id]
	}),
	event: one(events, {
		fields: [eventsCities.eventsId],
		references: [events.id]
	}),
}));

export const eventsStatesRelations = relations(eventsStates, ({one}) => ({
	event: one(events, {
		fields: [eventsStates.eventsId],
		references: [events.id]
	}),
	state: one(states, {
		fields: [eventsStates.statesId],
		references: [states.id]
	}),
}));

export const faqsDirectusUsersRelations = relations(faqsDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [faqsDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	faq: one(faqs, {
		fields: [faqsDirectusUsers.faqsId],
		references: [faqs.id]
	}),
}));

export const faqsRelations = relations(faqs, ({many}) => ({
	faqsDirectusUsers: many(faqsDirectusUsers),
	faqsProducts: many(faqsProducts),
	faqsFiles: many(faqsFiles),
	reportFaqs: many(reportFaqs),
}));

export const faqsProductsRelations = relations(faqsProducts, ({one}) => ({
	faq: one(faqs, {
		fields: [faqsProducts.faqsId],
		references: [faqs.id]
	}),
	product: one(products, {
		fields: [faqsProducts.productsId],
		references: [products.id]
	}),
}));

export const faqsFilesRelations = relations(faqsFiles, ({one}) => ({
	faq: one(faqs, {
		fields: [faqsFiles.faqsId],
		references: [faqs.id]
	}),
}));

export const incentivesProductsRelations = relations(incentivesProducts, ({one}) => ({
	incentive: one(incentives, {
		fields: [incentivesProducts.incentivesId],
		references: [incentives.id]
	}),
	product: one(products, {
		fields: [incentivesProducts.productsId],
		references: [products.id]
	}),
}));

export const circlesProductsRelations = relations(circlesProducts, ({one}) => ({
	product: one(products, {
		fields: [circlesProducts.productsId],
		references: [products.id]
	}),
}));

export const navigationWebsitesRelations = relations(navigationWebsites, ({one}) => ({
	navigation: one(navigation, {
		fields: [navigationWebsites.navigationId],
		references: [navigation.id]
	}),
	website: one(websites, {
		fields: [navigationWebsites.websitesId],
		references: [websites.id]
	}),
}));

export const websitesRelations = relations(websites, ({one, many}) => ({
	navigationWebsites: many(navigationWebsites),
	postgresstoresWebsites: many(postgresstoresWebsites),
	productsWebsites: many(productsWebsites),
	directusUser: one(directusUsers, {
		fields: [websites.creator],
		references: [directusUsers.id]
	}),
}));

export const feedsRelations = relations(feeds, ({one, many}) => ({
	shop: one(shops, {
		fields: [feeds.shop],
		references: [shops.id]
	}),
	feedsPosts: many(feedsPosts),
}));

export const feedsPostsRelations = relations(feedsPosts, ({one}) => ({
	feed: one(feeds, {
		fields: [feedsPosts.feedId],
		references: [feeds.id]
	}),
	post: one(posts, {
		fields: [feedsPosts.postId],
		references: [posts.id]
	}),
}));

export const gamificationEventsRelations = relations(gamificationEvents, ({one}) => ({
	event: one(events, {
		fields: [gamificationEvents.eventsId],
		references: [events.id]
	}),
	gamification: one(gamification, {
		fields: [gamificationEvents.gamificationId],
		references: [gamification.id]
	}),
}));

export const userProfileRelations = relations(userProfile, ({one, many}) => ({
	gamifications: many(gamification),
	directusFile: one(directusFiles, {
		fields: [userProfile.avatar],
		references: [directusFiles.id]
	}),
	directusUser_user: one(directusUsers, {
		fields: [userProfile.user],
		references: [directusUsers.id],
		relationName: "userProfile_user_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [userProfile.userUpdated],
		references: [directusUsers.id],
		relationName: "userProfile_userUpdated_directusUsers_id"
	}),
}));

export const integrationsReportRelations = relations(integrationsReport, ({one}) => ({
	integration: one(integrations, {
		fields: [integrationsReport.integrationsId],
		references: [integrations.id]
	}),
	report: one(report, {
		fields: [integrationsReport.reportId],
		references: [report.id]
	}),
}));

export const integrationsSpacesRelations = relations(integrationsSpaces, ({one}) => ({
	integration: one(integrations, {
		fields: [integrationsSpaces.integrationsId],
		references: [integrations.id]
	}),
	space: one(spaces, {
		fields: [integrationsSpaces.spacesId],
		references: [spaces.id]
	}),
}));

export const invoicesAddressRelations = relations(invoicesAddress, ({one}) => ({
	address: one(address, {
		fields: [invoicesAddress.addressId],
		references: [address.id]
	}),
	invoice: one(invoices, {
		fields: [invoicesAddress.invoiceId],
		references: [invoices.id]
	}),
}));

export const paymentsCurrencyRelations = relations(paymentsCurrency, ({one}) => ({
	currency: one(currency, {
		fields: [paymentsCurrency.currencyId],
		references: [currency.id]
	}),
	payment: one(payments, {
		fields: [paymentsCurrency.paymentsId],
		references: [payments.id]
	}),
}));

export const paymentsRelations = relations(payments, ({many}) => ({
	paymentsCurrencies: many(paymentsCurrency),
	paymentsDirectusUsers: many(paymentsDirectusUsers),
	paymentsOrders: many(paymentsOrders),
	paymentsCountries: many(paymentsCountries),
}));

export const pageBlocksFilesRelations = relations(pageBlocksFiles, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [pageBlocksFiles.directusFilesId],
		references: [directusFiles.id]
	}),
	pageBlock: one(pageBlocks, {
		fields: [pageBlocksFiles.pageBlocksId],
		references: [pageBlocks.id]
	}),
}));

export const pageBlocksRelations = relations(pageBlocks, ({one, many}) => ({
	pageBlocksFiles: many(pageBlocksFiles),
	platformPageBlocks: many(platformPageBlocks),
	directusUser_userCreated: one(directusUsers, {
		fields: [pageBlocks.userCreated],
		references: [directusUsers.id],
		relationName: "pageBlocks_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [pageBlocks.userUpdated],
		references: [directusUsers.id],
		relationName: "pageBlocks_userUpdated_directusUsers_id"
	}),
}));

export const invoicesOrdersRelations = relations(invoicesOrders, ({one}) => ({
	invoice: one(invoices, {
		fields: [invoicesOrders.invoiceId],
		references: [invoices.id]
	}),
	order: one(orders, {
		fields: [invoicesOrders.orderId],
		references: [orders.id]
	}),
}));

export const listsDirectusUsersRelations = relations(listsDirectusUsers, ({one}) => ({
	list: one(lists, {
		fields: [listsDirectusUsers.listId],
		references: [lists.id]
	}),
}));

export const postgresstoresWebsitesRelations = relations(postgresstoresWebsites, ({one}) => ({
	postgresstore: one(postgresstores, {
		fields: [postgresstoresWebsites.postgresstoresId],
		references: [postgresstores.id]
	}),
	website: one(websites, {
		fields: [postgresstoresWebsites.websitesId],
		references: [websites.id]
	}),
}));

export const productsCategoriesRelations = relations(productsCategories, ({one}) => ({
	category: one(categories, {
		fields: [productsCategories.categoriesId],
		references: [categories.id]
	}),
	product: one(products, {
		fields: [productsCategories.productsId],
		references: [products.id]
	}),
}));

export const manufacturerCountriesRelations = relations(manufacturerCountries, ({one}) => ({
	country: one(countries, {
		fields: [manufacturerCountries.countriesId],
		references: [countries.id]
	}),
	manufacturer: one(manufacturer, {
		fields: [manufacturerCountries.manufacturerId],
		references: [manufacturer.id]
	}),
}));

export const manufacturerRelations = relations(manufacturer, ({many}) => ({
	manufacturerCountries: many(manufacturerCountries),
	productsManufacturers: many(productsManufacturer),
	videosManufacturers: many(videosManufacturer),
	brandsManufacturers: many(brandsManufacturer),
}));

export const circlesPostsRelations = relations(circlesPosts, ({one}) => ({
	post: one(posts, {
		fields: [circlesPosts.postsId],
		references: [posts.id]
	}),
}));

export const platformPageBlocksRelations = relations(platformPageBlocks, ({one}) => ({
	pageBlock: one(pageBlocks, {
		fields: [platformPageBlocks.pageBlocksId],
		references: [pageBlocks.id]
	}),
	platform: one(platform, {
		fields: [platformPageBlocks.platformId],
		references: [platform.id]
	}),
}));

export const orderItemsProductsRelations = relations(orderItemsProducts, ({one}) => ({
	orderItem: one(orderItems, {
		fields: [orderItemsProducts.orderItemsId],
		references: [orderItems.id]
	}),
	product: one(products, {
		fields: [orderItemsProducts.productsId],
		references: [products.id]
	}),
}));

export const orderItemsRelations = relations(orderItems, ({many}) => ({
	orderItemsProducts: many(orderItemsProducts),
	orderItemsOrders: many(orderItemsOrders),
}));

export const radiosRelations = relations(radios, ({one, many}) => ({
	directusFile_file: one(directusFiles, {
		fields: [radios.file],
		references: [directusFiles.id],
		relationName: "radios_file_directusFiles_id"
	}),
	directusFile_image: one(directusFiles, {
		fields: [radios.image],
		references: [directusFiles.id],
		relationName: "radios_image_directusFiles_id"
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [radios.userCreated],
		references: [directusUsers.id],
		relationName: "radios_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [radios.userUpdated],
		references: [directusUsers.id],
		relationName: "radios_userUpdated_directusUsers_id"
	}),
	radiosDepartments: many(radiosDepartments),
	radiosMusiccharts: many(radiosMusicchart),
	radiosCategories: many(radiosCategories),
	chartsRadios: many(chartsRadios),
}));

export const radiosDepartmentsRelations = relations(radiosDepartments, ({one}) => ({
	department: one(departments, {
		fields: [radiosDepartments.departmentsId],
		references: [departments.id]
	}),
	radio: one(radios, {
		fields: [radiosDepartments.radiosId],
		references: [radios.id]
	}),
}));

export const profilesRelations = relations(profiles, ({one, many}) => ({
	directusFile: one(directusFiles, {
		fields: [profiles.avatar],
		references: [directusFiles.id]
	}),
	usersInAuth: one(usersInAuth, {
		fields: [profiles.id],
		references: [usersInAuth.id]
	}),
	directusRole: one(directusRoles, {
		fields: [profiles.role],
		references: [directusRoles.id]
	}),
	directusUser: one(directusUsers, {
		fields: [profiles.user],
		references: [directusUsers.id]
	}),
	profilesFollowers: many(profilesFollowers),
	profilesCountries: many(profilesCountries),
	profilesStates: many(profilesStates),
	profilesCities: many(profilesCities),
	media: many(media),
}));

export const usersInAuthRelations = relations(usersInAuth, ({many}) => ({
	profiles: many(profiles),
	emojiReactions: many(emojiReactions),
}));

export const radiosMusicchartRelations = relations(radiosMusicchart, ({one}) => ({
	radio: one(radios, {
		fields: [radiosMusicchart.radiosId],
		references: [radios.id]
	}),
}));

export const ordersProductsRelations = relations(ordersProducts, ({one}) => ({
	order: one(orders, {
		fields: [ordersProducts.ordersId],
		references: [orders.id]
	}),
	product: one(products, {
		fields: [ordersProducts.productsId],
		references: [products.id]
	}),
}));

export const outletsCategoriesRelations = relations(outletsCategories, ({one}) => ({
	category: one(categories, {
		fields: [outletsCategories.categoriesId],
		references: [categories.id]
	}),
	outlet: one(outlets, {
		fields: [outletsCategories.outletsId],
		references: [outlets.id]
	}),
}));

export const outletsRelations = relations(outlets, ({one, many}) => ({
	outletsCategories: many(outletsCategories),
	directusFile: one(directusFiles, {
		fields: [outlets.image],
		references: [directusFiles.id]
	}),
	outletsShorts: many(outletsShorts),
}));

export const paymentsDirectusUsersRelations = relations(paymentsDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [paymentsDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	payment: one(payments, {
		fields: [paymentsDirectusUsers.paymentsId],
		references: [payments.id]
	}),
}));

export const relatedProductsProductsRelations = relations(relatedProductsProducts, ({one}) => ({
	product: one(products, {
		fields: [relatedProductsProducts.productsId],
		references: [products.id]
	}),
	relatedProduct: one(relatedProducts, {
		fields: [relatedProductsProducts.relatedProductsId],
		references: [relatedProducts.id]
	}),
}));

export const relatedProductsRelations = relations(relatedProducts, ({one, many}) => ({
	relatedProductsProducts: many(relatedProductsProducts),
	directusUser: one(directusUsers, {
		fields: [relatedProducts.user],
		references: [directusUsers.id]
	}),
}));

export const regionShippingAddressRelations = relations(regionShippingAddress, ({one}) => ({
	region: one(region, {
		fields: [regionShippingAddress.regionId],
		references: [region.id]
	}),
	shippingAddress: one(shippingAddress, {
		fields: [regionShippingAddress.shippingAddressId],
		references: [shippingAddress.id]
	}),
}));

export const shippingAddressRelations = relations(shippingAddress, ({many}) => ({
	regionShippingAddresses: many(regionShippingAddress),
	invoicesShippingAddresses: many(invoicesShippingAddress),
}));

export const reportCommentsRelations = relations(reportComments, ({one}) => ({
	comment: one(comments, {
		fields: [reportComments.commentsId],
		references: [comments.id]
	}),
	report: one(report, {
		fields: [reportComments.reportId],
		references: [report.id]
	}),
}));

export const reportDirectusUsersRelations = relations(reportDirectusUsers, ({one}) => ({
	report: one(report, {
		fields: [reportDirectusUsers.reportId],
		references: [report.id]
	}),
}));

export const reportFaqsRelations = relations(reportFaqs, ({one}) => ({
	faq: one(faqs, {
		fields: [reportFaqs.faqsId],
		references: [faqs.id]
	}),
	report: one(report, {
		fields: [reportFaqs.reportId],
		references: [report.id]
	}),
}));

export const pickupLocationsCityRelations = relations(pickupLocationsCity, ({one}) => ({
	pickupLocation: one(pickupLocations, {
		fields: [pickupLocationsCity.pickupLocationsId],
		references: [pickupLocations.id]
	}),
}));

export const pickupLocationsRelations = relations(pickupLocations, ({many}) => ({
	pickupLocationsCities: many(pickupLocationsCity),
	pickupLocationsCountries: many(pickupLocationsCountry),
	pickupLocationsStates: many(pickupLocationsState),
}));

export const pickupLocationsCountryRelations = relations(pickupLocationsCountry, ({one}) => ({
	pickupLocation: one(pickupLocations, {
		fields: [pickupLocationsCountry.pickupLocationsId],
		references: [pickupLocations.id]
	}),
}));

export const pickupLocationsStateRelations = relations(pickupLocationsState, ({one}) => ({
	pickupLocation: one(pickupLocations, {
		fields: [pickupLocationsState.pickupLocationsId],
		references: [pickupLocations.id]
	}),
}));

export const shipmentRelations = relations(shipment, ({one, many}) => ({
	order: one(orders, {
		fields: [shipment.order],
		references: [orders.id]
	}),
	shipmentProducts: many(shipmentProducts),
	shipmentComments: many(shipmentComments),
	shipmentTrackings: many(shipmentTracking),
	shipmentAddresses: many(shipmentAddress),
}));

export const financeIndexArticlesRelations = relations(financeIndexArticles, ({one}) => ({
	article: one(articles, {
		fields: [financeIndexArticles.articlesId],
		references: [articles.id]
	}),
	financeIndex: one(financeIndex, {
		fields: [financeIndexArticles.financeIndexId],
		references: [financeIndex.id]
	}),
}));

export const shipmentProductsRelations = relations(shipmentProducts, ({one}) => ({
	product: one(products, {
		fields: [shipmentProducts.productsId],
		references: [products.id]
	}),
	shipment: one(shipment, {
		fields: [shipmentProducts.shipmentId],
		references: [shipment.id]
	}),
}));

export const outletsShortsRelations = relations(outletsShorts, ({one}) => ({
	outlet: one(outlets, {
		fields: [outletsShorts.outletsId],
		references: [outlets.id]
	}),
	short: one(shorts, {
		fields: [outletsShorts.shortsId],
		references: [shorts.id]
	}),
}));

export const reportPostsRelations = relations(reportPosts, ({one}) => ({
	post: one(posts, {
		fields: [reportPosts.postsId],
		references: [posts.id]
	}),
	report: one(report, {
		fields: [reportPosts.reportId],
		references: [report.id]
	}),
}));

export const productsCountriesRelations = relations(productsCountries, ({one}) => ({
	product: one(products, {
		fields: [productsCountries.productsId],
		references: [products.id]
	}),
}));

export const productsCurrencyRelations = relations(productsCurrency, ({one}) => ({
	currency: one(currency, {
		fields: [productsCurrency.currencyId],
		references: [currency.id]
	}),
	product: one(products, {
		fields: [productsCurrency.productsId],
		references: [products.id]
	}),
}));

export const productsDepartmentsRelations = relations(productsDepartments, ({one}) => ({
	department: one(departments, {
		fields: [productsDepartments.departmentsId],
		references: [departments.id]
	}),
	product: one(products, {
		fields: [productsDepartments.productsId],
		references: [products.id]
	}),
}));

export const productsManufacturerRelations = relations(productsManufacturer, ({one}) => ({
	manufacturer: one(manufacturer, {
		fields: [productsManufacturer.manufacturerId],
		references: [manufacturer.id]
	}),
	product: one(products, {
		fields: [productsManufacturer.productsId],
		references: [products.id]
	}),
}));

export const productsDirectusUsersRelations = relations(productsDirectusUsers, ({one}) => ({
	product: one(products, {
		fields: [productsDirectusUsers.productId],
		references: [products.id]
	}),
}));

export const shippingAddressesDirectusUsersRelations = relations(shippingAddressesDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [shippingAddressesDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	shippingAddress: one(shippingAddresses, {
		fields: [shippingAddressesDirectusUsers.shippingAddressesId],
		references: [shippingAddresses.id]
	}),
}));

export const shippingAddressesRelations = relations(shippingAddresses, ({many}) => ({
	shippingAddressesDirectusUsers: many(shippingAddressesDirectusUsers),
	shippingAddressesOrders: many(shippingAddressesOrders),
	shippingAddressesStates: many(shippingAddressesStates),
	shippingAddressesCities: many(shippingAddressesCities),
	shippingAddressesCountries: many(shippingAddressesCountries),
}));

export const shippingAddressesOrdersRelations = relations(shippingAddressesOrders, ({one}) => ({
	order: one(orders, {
		fields: [shippingAddressesOrders.ordersId],
		references: [orders.id]
	}),
	shippingAddress: one(shippingAddresses, {
		fields: [shippingAddressesOrders.shippingAddressesId],
		references: [shippingAddresses.id]
	}),
}));

export const productsProductDesignerRelations = relations(productsProductDesigner, ({one}) => ({
	product: one(products, {
		fields: [productsProductDesigner.productsId],
		references: [products.id]
	}),
}));

export const postgresstoresCollectionsRelations = relations(postgresstoresCollections, ({one}) => ({
	collection: one(collections, {
		fields: [postgresstoresCollections.collectionsId],
		references: [collections.id]
	}),
	postgresstore: one(postgresstores, {
		fields: [postgresstoresCollections.postgresstoresId],
		references: [postgresstores.id]
	}),
}));

export const ratingsProductsRelations = relations(ratingsProducts, ({one}) => ({
	product: one(products, {
		fields: [ratingsProducts.productsId],
		references: [products.id]
	}),
	rating: one(ratings, {
		fields: [ratingsProducts.ratingsId],
		references: [ratings.id]
	}),
}));

export const reactionsCommentsRelations = relations(reactionsComments, ({one}) => ({
	comment: one(comments, {
		fields: [reactionsComments.commentsId],
		references: [comments.id]
	}),
	reaction: one(reactions, {
		fields: [reactionsComments.reactionsId],
		references: [reactions.id]
	}),
}));

export const reactionsRelations = relations(reactions, ({one, many}) => ({
	reactionsComments: many(reactionsComments),
	reactionsLists: many(reactionsLists),
	reactionsDirectusUsers: many(reactionsDirectusUsers),
	reactionsPosts: many(reactionsPosts),
	reactionsShorts: many(reactionsShorts),
	commentsReactions: many(commentsReactions),
	directusFile: one(directusFiles, {
		fields: [reactions.image],
		references: [directusFiles.id]
	}),
	list: one(lists, {
		fields: [reactions.listId],
		references: [lists.id]
	}),
	post: one(posts, {
		fields: [reactions.posts],
		references: [posts.id]
	}),
	product: one(products, {
		fields: [reactions.product],
		references: [products.id]
	}),
	space: one(spaces, {
		fields: [reactions.spaceId],
		references: [spaces.id]
	}),
	directusUser_user: one(directusUsers, {
		fields: [reactions.user],
		references: [directusUsers.id],
		relationName: "reactions_user_directusUsers_id"
	}),
	directusUser_userId: one(directusUsers, {
		fields: [reactions.userId],
		references: [directusUsers.id],
		relationName: "reactions_userId_directusUsers_id"
	}),
	video: one(videos, {
		fields: [reactions.videoId],
		references: [videos.id]
	}),
}));

export const productsWebsitesRelations = relations(productsWebsites, ({one}) => ({
	product: one(products, {
		fields: [productsWebsites.productsId],
		references: [products.id]
	}),
	website: one(websites, {
		fields: [productsWebsites.websitesId],
		references: [websites.id]
	}),
}));

export const reactionsListsRelations = relations(reactionsLists, ({one}) => ({
	list: one(lists, {
		fields: [reactionsLists.listsId],
		references: [lists.id]
	}),
	reaction: one(reactions, {
		fields: [reactionsLists.reactionsId],
		references: [reactions.id]
	}),
}));

export const reactionsDirectusUsersRelations = relations(reactionsDirectusUsers, ({one}) => ({
	reaction: one(reactions, {
		fields: [reactionsDirectusUsers.reactionId],
		references: [reactions.id]
	}),
}));

export const reactionsPostsRelations = relations(reactionsPosts, ({one}) => ({
	post: one(posts, {
		fields: [reactionsPosts.postsId],
		references: [posts.id]
	}),
	reaction: one(reactions, {
		fields: [reactionsPosts.reactionsId],
		references: [reactions.id]
	}),
}));

export const reactionsShortsRelations = relations(reactionsShorts, ({one}) => ({
	reaction: one(reactions, {
		fields: [reactionsShorts.reactionsId],
		references: [reactions.id]
	}),
	short: one(shorts, {
		fields: [reactionsShorts.shortsId],
		references: [shorts.id]
	}),
}));

export const reportProductsRelations = relations(reportProducts, ({one}) => ({
	product: one(products, {
		fields: [reportProducts.productsId],
		references: [products.id]
	}),
	report: one(report, {
		fields: [reportProducts.reportId],
		references: [report.id]
	}),
}));

export const shortsSpacesRelations = relations(shortsSpaces, ({one}) => ({
	short: one(shorts, {
		fields: [shortsSpaces.shortsId],
		references: [shorts.id]
	}),
	space: one(spaces, {
		fields: [shortsSpaces.spacesId],
		references: [spaces.id]
	}),
}));

export const sitePreferenceCountriesRelations = relations(sitePreferenceCountries, ({one}) => ({
	country: one(countries, {
		fields: [sitePreferenceCountries.countriesId],
		references: [countries.id]
	}),
}));

export const sitePreferenceDepartmentsRelations = relations(sitePreferenceDepartments, ({one}) => ({
	department: one(departments, {
		fields: [sitePreferenceDepartments.departmentsId],
		references: [departments.id]
	}),
}));

export const userFriendsPostsRelations = relations(userFriendsPosts, ({one}) => ({
	post: one(posts, {
		fields: [userFriendsPosts.postsId],
		references: [posts.id]
	}),
	userFriend: one(userFriends, {
		fields: [userFriendsPosts.userFriendsId],
		references: [userFriends.id]
	}),
}));

export const userFriendsRelations = relations(userFriends, ({one, many}) => ({
	userFriendsPosts: many(userFriendsPosts),
	directusUser_friend: one(directusUsers, {
		fields: [userFriends.friend],
		references: [directusUsers.id],
		relationName: "userFriends_friend_directusUsers_id"
	}),
	directusUser_user: one(directusUsers, {
		fields: [userFriends.user],
		references: [directusUsers.id],
		relationName: "userFriends_user_directusUsers_id"
	}),
}));

export const projectBoardProjectsRelations = relations(projectBoardProjects, ({one}) => ({
	projectBoard: one(projectBoard, {
		fields: [projectBoardProjects.projectBoardId],
		references: [projectBoard.id]
	}),
	project: one(projects, {
		fields: [projectBoardProjects.projectsId],
		references: [projects.id]
	}),
}));

export const emojiReactionsRelations = relations(emojiReactions, ({one}) => ({
	usersInAuth: one(usersInAuth, {
		fields: [emojiReactions.userId],
		references: [usersInAuth.id]
	}),
}));

export const returnsOrdersRelations = relations(returnsOrders, ({one}) => ({
	order: one(orders, {
		fields: [returnsOrders.ordersId],
		references: [orders.id]
	}),
	return: one(returns, {
		fields: [returnsOrders.returnsId],
		references: [returns.id]
	}),
}));

export const returnsRelations = relations(returns, ({many}) => ({
	returnsOrders: many(returnsOrders),
	returnsProducts: many(returnsProducts),
}));

export const reviewsProductsRelations = relations(reviewsProducts, ({one}) => ({
	product: one(products, {
		fields: [reviewsProducts.productsId],
		references: [products.id]
	}),
}));

export const shipmentCommentsRelations = relations(shipmentComments, ({one}) => ({
	shipment: one(shipment, {
		fields: [shipmentComments.parentId],
		references: [shipment.id]
	}),
}));

export const projectBoardFilesRelations = relations(projectBoardFiles, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [projectBoardFiles.directusFilesId],
		references: [directusFiles.id]
	}),
	projectBoard: one(projectBoard, {
		fields: [projectBoardFiles.projectBoardId],
		references: [projectBoard.id]
	}),
}));

export const shipmentTrackingRelations = relations(shipmentTracking, ({one}) => ({
	shipment: one(shipment, {
		fields: [shipmentTracking.parentId],
		references: [shipment.id]
	}),
}));

export const projectsProjectTimelineRelations = relations(projectsProjectTimeline, ({one}) => ({
	projectTimeline: one(projectTimeline, {
		fields: [projectsProjectTimeline.projectTimelineId],
		references: [projectTimeline.id]
	}),
	project: one(projects, {
		fields: [projectsProjectTimeline.projectsId],
		references: [projects.id]
	}),
}));

export const projectTimelineRelations = relations(projectTimeline, ({many}) => ({
	projectsProjectTimelines: many(projectsProjectTimeline),
}));

export const calendarDirectusUsersRelations = relations(calendarDirectusUsers, ({one}) => ({
	calendar: one(calendar, {
		fields: [calendarDirectusUsers.calendarId],
		references: [calendar.id]
	}),
	directusUser: one(directusUsers, {
		fields: [calendarDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
}));

export const calendarRelations = relations(calendar, ({one, many}) => ({
	calendarDirectusUsers: many(calendarDirectusUsers),
	calendarLists: many(calendarLists),
	projectsCalendars: many(projectsCalendar),
	calendarIntegrations: many(calendarIntegrations),
	calendarComments: many(calendarComments),
	directusFile: one(directusFiles, {
		fields: [calendar.image],
		references: [directusFiles.id]
	}),
	calendarEvents: many(calendarEvents),
}));

export const shippingAddressesStatesRelations = relations(shippingAddressesStates, ({one}) => ({
	shippingAddress: one(shippingAddresses, {
		fields: [shippingAddressesStates.shippingAddressesId],
		references: [shippingAddresses.id]
	}),
	state: one(states, {
		fields: [shippingAddressesStates.statesId],
		references: [states.id]
	}),
}));

export const shopsCategoriesRelations = relations(shopsCategories, ({one}) => ({
	category: one(categories, {
		fields: [shopsCategories.categoriesId],
		references: [categories.id]
	}),
	shop: one(shops, {
		fields: [shopsCategories.shopsId],
		references: [shops.id]
	}),
}));

export const shopsCommentsRelations = relations(shopsComments, ({one}) => ({
	comment: one(comments, {
		fields: [shopsComments.commentsId],
		references: [comments.id]
	}),
	shop: one(shops, {
		fields: [shopsComments.shopsId],
		references: [shops.id]
	}),
}));

export const shopsCountriesRelations = relations(shopsCountries, ({one}) => ({
	country: one(countries, {
		fields: [shopsCountries.countriesId],
		references: [countries.id]
	}),
	shop: one(shops, {
		fields: [shopsCountries.shopsId],
		references: [shops.id]
	}),
}));

export const shopsDepartmentsRelations = relations(shopsDepartments, ({one}) => ({
	department: one(departments, {
		fields: [shopsDepartments.departmentsId],
		references: [departments.id]
	}),
	shop: one(shops, {
		fields: [shopsDepartments.shopsId],
		references: [shops.id]
	}),
}));

export const shopsDirectusUsersRelations = relations(shopsDirectusUsers, ({one}) => ({
	shop: one(shops, {
		fields: [shopsDirectusUsers.shopsId],
		references: [shops.id]
	}),
}));

export const taxesCountriesRelations = relations(taxesCountries, ({one}) => ({
	country: one(countries, {
		fields: [taxesCountries.countriesId],
		references: [countries.id]
	}),
	tax: one(taxes, {
		fields: [taxesCountries.taxesId],
		references: [taxes.id]
	}),
}));

export const taxesRelations = relations(taxes, ({many}) => ({
	taxesCountries: many(taxesCountries),
	taxesStates: many(taxesStates),
}));

export const taxesStatesRelations = relations(taxesStates, ({one}) => ({
	state: one(states, {
		fields: [taxesStates.statesId],
		references: [states.id]
	}),
	tax: one(taxes, {
		fields: [taxesStates.taxesId],
		references: [taxes.id]
	}),
}));

export const translationsPostgresstoresRelations = relations(translationsPostgresstores, ({one}) => ({
	postgresstore: one(postgresstores, {
		fields: [translationsPostgresstores.postgresstoresId],
		references: [postgresstores.id]
	}),
	translation: one(translations, {
		fields: [translationsPostgresstores.translationsId],
		references: [translations.id]
	}),
}));

export const translationsRelations = relations(translations, ({many}) => ({
	translationsPostgresstores: many(translationsPostgresstores),
}));

export const tagsShortsRelations = relations(tagsShorts, ({one}) => ({
	short: one(shorts, {
		fields: [tagsShorts.shortsId],
		references: [shorts.id]
	}),
	tag: one(tags, {
		fields: [tagsShorts.tagsId],
		references: [tags.id]
	}),
}));

export const tagsRelations = relations(tags, ({many}) => ({
	tagsShorts: many(tagsShorts),
	spacesTags: many(spacesTags),
	tagsCategories: many(tagsCategories),
	tagsDepartments: many(tagsDepartments),
	productsTags: many(productsTags),
	tagsArticles: many(tagsArticles),
	tagsProducts: many(tagsProducts),
	videosTags: many(videosTags),
	integrationsTags: many(integrationsTags),
	listsTemplateTags: many(listsTemplateTags),
	tagsPosts: many(tagsPosts),
}));

export const shopsFilesRelations = relations(shopsFiles, ({one}) => ({
	shop: one(shops, {
		fields: [shopsFiles.shopsId],
		references: [shops.id]
	}),
}));

export const shopsProductsRelations = relations(shopsProducts, ({one}) => ({
	product: one(products, {
		fields: [shopsProducts.productsId],
		references: [products.id]
	}),
	shop: one(shops, {
		fields: [shopsProducts.shopsId],
		references: [shops.id]
	}),
}));

export const videosManufacturerRelations = relations(videosManufacturer, ({one}) => ({
	manufacturer: one(manufacturer, {
		fields: [videosManufacturer.manufacturerId],
		references: [manufacturer.id]
	}),
	video: one(videos, {
		fields: [videosManufacturer.videosId],
		references: [videos.id]
	}),
}));

export const videosProductsRelations = relations(videosProducts, ({one}) => ({
	product: one(products, {
		fields: [videosProducts.productsId],
		references: [products.id]
	}),
	video: one(videos, {
		fields: [videosProducts.videosId],
		references: [videos.id]
	}),
}));

export const shortsDirectusUsersRelations = relations(shortsDirectusUsers, ({one}) => ({
	short: one(shorts, {
		fields: [shortsDirectusUsers.shortsId],
		references: [shorts.id]
	}),
}));

export const spacesTagsRelations = relations(spacesTags, ({one}) => ({
	space: one(spaces, {
		fields: [spacesTags.spacesId],
		references: [spaces.id]
	}),
	tag: one(tags, {
		fields: [spacesTags.tagsId],
		references: [tags.id]
	}),
}));

export const spacesPostsRelations = relations(spacesPosts, ({one}) => ({
	post: one(posts, {
		fields: [spacesPosts.postsId],
		references: [posts.id]
	}),
	space: one(spaces, {
		fields: [spacesPosts.spacesId],
		references: [spaces.id]
	}),
}));

export const streamsRelations = relations(streams, ({one, many}) => ({
	video: one(videos, {
		fields: [streams.streamId],
		references: [videos.id]
	}),
	streamsRatings: many(streamsRatings),
}));

export const tagsCategoriesRelations = relations(tagsCategories, ({one}) => ({
	category: one(categories, {
		fields: [tagsCategories.categoriesId],
		references: [categories.id]
	}),
	tag: one(tags, {
		fields: [tagsCategories.tagsId],
		references: [tags.id]
	}),
}));

export const tagsDepartmentsRelations = relations(tagsDepartments, ({one}) => ({
	department: one(departments, {
		fields: [tagsDepartments.departmentsId],
		references: [departments.id]
	}),
	tag: one(tags, {
		fields: [tagsDepartments.tagsId],
		references: [tags.id]
	}),
}));

export const spacesFilesRelations = relations(spacesFiles, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [spacesFiles.directusFilesId],
		references: [directusFiles.id]
	}),
	space: one(spaces, {
		fields: [spacesFiles.spacesId],
		references: [spaces.id]
	}),
}));

export const cartProductsRelations = relations(cartProducts, ({one}) => ({
	cart: one(cart, {
		fields: [cartProducts.cartId],
		references: [cart.id]
	}),
	product: one(products, {
		fields: [cartProducts.productsId],
		references: [products.id]
	}),
}));

export const brandsCategoriesRelations = relations(brandsCategories, ({one}) => ({
	brand: one(brands, {
		fields: [brandsCategories.brandsId],
		references: [brands.id]
	}),
	category: one(categories, {
		fields: [brandsCategories.categoriesId],
		references: [categories.id]
	}),
}));

export const brandsDepartmentsRelations = relations(brandsDepartments, ({one}) => ({
	brand: one(brands, {
		fields: [brandsDepartments.brandsId],
		references: [brands.id]
	}),
	department: one(departments, {
		fields: [brandsDepartments.departmentsId],
		references: [departments.id]
	}),
}));

export const brandsManufacturerRelations = relations(brandsManufacturer, ({one}) => ({
	brand: one(brands, {
		fields: [brandsManufacturer.brandsId],
		references: [brands.id]
	}),
	manufacturer: one(manufacturer, {
		fields: [brandsManufacturer.manufacturerId],
		references: [manufacturer.id]
	}),
}));

export const brandsShortsRelations = relations(brandsShorts, ({one}) => ({
	brand: one(brands, {
		fields: [brandsShorts.brandsId],
		references: [brands.id]
	}),
	short: one(shorts, {
		fields: [brandsShorts.shortsId],
		references: [shorts.id]
	}),
}));

export const categoriesDepartmentsRelations = relations(categoriesDepartments, ({one}) => ({
	category: one(categories, {
		fields: [categoriesDepartments.categoriesId],
		references: [categories.id]
	}),
	department: one(departments, {
		fields: [categoriesDepartments.departmentsId],
		references: [departments.id]
	}),
}));

export const collectionsProductsRelations = relations(collectionsProducts, ({one}) => ({
	collection: one(collections, {
		fields: [collectionsProducts.collectionsId],
		references: [collections.id]
	}),
	product: one(products, {
		fields: [collectionsProducts.productsId],
		references: [products.id]
	}),
}));

export const commentsReactionsRelations = relations(commentsReactions, ({one}) => ({
	comment: one(comments, {
		fields: [commentsReactions.commentsId],
		references: [comments.id]
	}),
	reaction: one(reactions, {
		fields: [commentsReactions.reactionsId],
		references: [reactions.id]
	}),
}));

export const directusRevisionsRelations = relations(directusRevisions, ({one, many}) => ({
	directusActivity: one(directusActivity, {
		fields: [directusRevisions.activity],
		references: [directusActivity.id]
	}),
	directusRevision: one(directusRevisions, {
		fields: [directusRevisions.parent],
		references: [directusRevisions.id],
		relationName: "directusRevisions_parent_directusRevisions_id"
	}),
	directusRevisions: many(directusRevisions, {
		relationName: "directusRevisions_parent_directusRevisions_id"
	}),
	directusVersion: one(directusVersions, {
		fields: [directusRevisions.version],
		references: [directusVersions.id]
	}),
}));

export const directusActivityRelations = relations(directusActivity, ({many}) => ({
	directusRevisions: many(directusRevisions),
}));

export const directusPresetsRelations = relations(directusPresets, ({one}) => ({
	directusRole: one(directusRoles, {
		fields: [directusPresets.role],
		references: [directusRoles.id]
	}),
	directusUser: one(directusUsers, {
		fields: [directusPresets.user],
		references: [directusUsers.id]
	}),
}));

export const directusSessionsRelations = relations(directusSessions, ({one}) => ({
	directusShare: one(directusShares, {
		fields: [directusSessions.share],
		references: [directusShares.id]
	}),
	directusUser: one(directusUsers, {
		fields: [directusSessions.user],
		references: [directusUsers.id]
	}),
}));

export const eventsCountriesRelations = relations(eventsCountries, ({one}) => ({
	country: one(countries, {
		fields: [eventsCountries.countriesId],
		references: [countries.id]
	}),
	event: one(events, {
		fields: [eventsCountries.eventsId],
		references: [events.id]
	}),
}));

export const eventsFilesRelations = relations(eventsFiles, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [eventsFiles.directusFilesId],
		references: [directusFiles.id]
	}),
	event: one(events, {
		fields: [eventsFiles.eventsId],
		references: [events.id]
	}),
}));

export const eventsProductsRelations = relations(eventsProducts, ({one}) => ({
	event: one(events, {
		fields: [eventsProducts.eventsId],
		references: [events.id]
	}),
	product: one(products, {
		fields: [eventsProducts.productsId],
		references: [products.id]
	}),
}));

export const gamificationDirectusUsersRelations = relations(gamificationDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [gamificationDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	gamification: one(gamification, {
		fields: [gamificationDirectusUsers.gamificationId],
		references: [gamification.id]
	}),
}));

export const gamificationNotificationsRelations = relations(gamificationNotifications, ({one}) => ({
	gamification: one(gamification, {
		fields: [gamificationNotifications.gamificationId],
		references: [gamification.id]
	}),
	notification: one(notifications, {
		fields: [gamificationNotifications.notificationsId],
		references: [notifications.id]
	}),
}));

export const notificationsRelations = relations(notifications, ({one, many}) => ({
	gamificationNotifications: many(gamificationNotifications),
	directusUser: one(directusUsers, {
		fields: [notifications.recipient],
		references: [directusUsers.id]
	}),
}));

export const gamificationProductsRelations = relations(gamificationProducts, ({one}) => ({
	gamification: one(gamification, {
		fields: [gamificationProducts.gamificationId],
		references: [gamification.id]
	}),
	product: one(products, {
		fields: [gamificationProducts.productsId],
		references: [products.id]
	}),
}));

export const invoicesShippingAddressRelations = relations(invoicesShippingAddress, ({one}) => ({
	invoice: one(invoices, {
		fields: [invoicesShippingAddress.invoiceId],
		references: [invoices.id]
	}),
	shippingAddress: one(shippingAddress, {
		fields: [invoicesShippingAddress.shippingAddressId],
		references: [shippingAddress.id]
	}),
}));

export const projectsRegionRelations = relations(projectsRegion, ({one}) => ({
	project: one(projects, {
		fields: [projectsRegion.projectsId],
		references: [projects.id]
	}),
	region: one(region, {
		fields: [projectsRegion.regionId],
		references: [region.id]
	}),
}));

export const projectsFilesRelations = relations(projectsFiles, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [projectsFiles.directusFilesId],
		references: [directusFiles.id]
	}),
	project: one(projects, {
		fields: [projectsFiles.projectsId],
		references: [projects.id]
	}),
}));

export const regionCountriesRelations = relations(regionCountries, ({one}) => ({
	country: one(countries, {
		fields: [regionCountries.countriesId],
		references: [countries.id]
	}),
	region: one(region, {
		fields: [regionCountries.regionId],
		references: [region.id]
	}),
}));

export const addressCountriesRelations = relations(addressCountries, ({one}) => ({
	address: one(address, {
		fields: [addressCountries.addressId],
		references: [address.id]
	}),
	country: one(countries, {
		fields: [addressCountries.countriesId],
		references: [countries.id]
	}),
}));

export const agreementsProductsRelations = relations(agreementsProducts, ({one}) => ({
	product: one(products, {
		fields: [agreementsProducts.productsId],
		references: [products.id]
	}),
}));

export const articlesCategoriesRelations = relations(articlesCategories, ({one}) => ({
	article: one(articles, {
		fields: [articlesCategories.articlesId],
		references: [articles.id]
	}),
	category: one(categories, {
		fields: [articlesCategories.categoriesId],
		references: [categories.id]
	}),
}));

export const articlesDepartmentsRelations = relations(articlesDepartments, ({one}) => ({
	article: one(articles, {
		fields: [articlesDepartments.articlesId],
		references: [articles.id]
	}),
	department: one(departments, {
		fields: [articlesDepartments.departmentsId],
		references: [departments.id]
	}),
}));

export const productTypesProductsRelations = relations(productTypesProducts, ({one}) => ({
	productType: one(productTypes, {
		fields: [productTypesProducts.productTypesId],
		references: [productTypes.id]
	}),
	product: one(products, {
		fields: [productTypesProducts.productsId],
		references: [products.id]
	}),
}));

export const productTypesRelations = relations(productTypes, ({many}) => ({
	productTypesProducts: many(productTypesProducts),
	integrationsProductTypes: many(integrationsProductTypes),
	attributesProductTypes: many(attributesProductTypes),
	videosProductTypes: many(videosProductTypes),
}));

export const circlesDirectusUsersRelations = relations(circlesDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [circlesDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
}));

export const connectionsDirectusUsersRelations = relations(connectionsDirectusUsers, ({one}) => ({
	connection: one(connections, {
		fields: [connectionsDirectusUsers.connectionsId],
		references: [connections.id]
	}),
}));

export const connectionsRelations = relations(connections, ({many}) => ({
	connectionsDirectusUsers: many(connectionsDirectusUsers),
}));

export const navigationPagesRelations = relations(navigationPages, ({one}) => ({
	navigation: one(navigation, {
		fields: [navigationPages.navigationId],
		references: [navigation.id]
	}),
	page: one(pages, {
		fields: [navigationPages.pagesId],
		references: [pages.id]
	}),
}));

export const subscriptionsDirectusUsersRelations = relations(subscriptionsDirectusUsers, ({one}) => ({
	subscription: one(subscriptions, {
		fields: [subscriptionsDirectusUsers.subscriptionsId],
		references: [subscriptions.id]
	}),
}));

export const subscriptionsRelations = relations(subscriptions, ({many}) => ({
	subscriptionsDirectusUsers: many(subscriptionsDirectusUsers),
	subscriptionsProducts: many(subscriptionsProducts),
}));

export const attributesProductsRelations = relations(attributesProducts, ({one}) => ({
	attribute: one(attributes, {
		fields: [attributesProducts.attributesId],
		references: [attributes.id]
	}),
	product: one(products, {
		fields: [attributesProducts.productsId],
		references: [products.id]
	}),
}));

export const attributesRelations = relations(attributes, ({many}) => ({
	attributesProducts: many(attributesProducts),
	productsAttributes: many(productsAttributes),
	videos: many(videos),
	integrationsAttributes: many(integrationsAttributes),
	attributesProductTypes: many(attributesProductTypes),
	productAttributes: many(productAttributes),
}));

export const orderItemsOrdersRelations = relations(orderItemsOrders, ({one}) => ({
	orderItem: one(orderItems, {
		fields: [orderItemsOrders.orderItemsId],
		references: [orderItems.id]
	}),
	order: one(orders, {
		fields: [orderItemsOrders.ordersId],
		references: [orders.id]
	}),
}));

export const paymentsOrdersRelations = relations(paymentsOrders, ({one}) => ({
	order: one(orders, {
		fields: [paymentsOrders.ordersId],
		references: [orders.id]
	}),
	payment: one(payments, {
		fields: [paymentsOrders.paymentsId],
		references: [payments.id]
	}),
}));

export const redirectsRelations = relations(redirects, ({one}) => ({
	directusUser_userCreated: one(directusUsers, {
		fields: [redirects.userCreated],
		references: [directusUsers.id],
		relationName: "redirects_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [redirects.userUpdated],
		references: [directusUsers.id],
		relationName: "redirects_userUpdated_directusUsers_id"
	}),
}));

export const postgresstoresProductsRelations = relations(postgresstoresProducts, ({one}) => ({
	postgresstore: one(postgresstores, {
		fields: [postgresstoresProducts.postgresstoresId],
		references: [postgresstores.id]
	}),
	product: one(products, {
		fields: [postgresstoresProducts.productsId],
		references: [products.id]
	}),
}));

export const productsAttributesRelations = relations(productsAttributes, ({one}) => ({
	attribute: one(attributes, {
		fields: [productsAttributes.attributesId],
		references: [attributes.id]
	}),
	product: one(products, {
		fields: [productsAttributes.productsId],
		references: [products.id]
	}),
}));

export const profilesFollowersRelations = relations(profilesFollowers, ({one}) => ({
	follower: one(followers, {
		fields: [profilesFollowers.followersId],
		references: [followers.id]
	}),
	profile: one(profiles, {
		fields: [profilesFollowers.profilesId],
		references: [profiles.id]
	}),
}));

export const followersRelations = relations(followers, ({many}) => ({
	profilesFollowers: many(profilesFollowers),
}));

export const productsSpacesRelations = relations(productsSpaces, ({one}) => ({
	product: one(products, {
		fields: [productsSpaces.productsId],
		references: [products.id]
	}),
	space: one(spaces, {
		fields: [productsSpaces.spacesId],
		references: [spaces.id]
	}),
}));

export const productsTagsRelations = relations(productsTags, ({one}) => ({
	product: one(products, {
		fields: [productsTags.productsId],
		references: [products.id]
	}),
	tag: one(tags, {
		fields: [productsTags.tagsId],
		references: [tags.id]
	}),
}));

export const radiosCategoriesRelations = relations(radiosCategories, ({one}) => ({
	category: one(categories, {
		fields: [radiosCategories.categoriesId],
		references: [categories.id]
	}),
	radio: one(radios, {
		fields: [radiosCategories.radiosId],
		references: [radios.id]
	}),
}));

export const crossSellProductsProductsRelations = relations(crossSellProductsProducts, ({one}) => ({
	crossSellProduct: one(crossSellProducts, {
		fields: [crossSellProductsProducts.crossSellProductsId],
		references: [crossSellProducts.id]
	}),
	product: one(products, {
		fields: [crossSellProductsProducts.productsId],
		references: [products.id]
	}),
}));

export const directusNotificationsRelations = relations(directusNotifications, ({one}) => ({
	directusUser_recipient: one(directusUsers, {
		fields: [directusNotifications.recipient],
		references: [directusUsers.id],
		relationName: "directusNotifications_recipient_directusUsers_id"
	}),
	directusUser_sender: one(directusUsers, {
		fields: [directusNotifications.sender],
		references: [directusUsers.id],
		relationName: "directusNotifications_sender_directusUsers_id"
	}),
}));

export const regionAddressRelations = relations(regionAddress, ({one}) => ({
	address: one(address, {
		fields: [regionAddress.addressId],
		references: [address.id]
	}),
	region: one(region, {
		fields: [regionAddress.regionId],
		references: [region.id]
	}),
}));

export const shipmentAddressRelations = relations(shipmentAddress, ({one}) => ({
	address: one(address, {
		fields: [shipmentAddress.addressId],
		references: [address.id]
	}),
	shipment: one(shipment, {
		fields: [shipmentAddress.shipmentId],
		references: [shipment.id]
	}),
}));

export const returnsProductsRelations = relations(returnsProducts, ({one}) => ({
	product: one(products, {
		fields: [returnsProducts.productsId],
		references: [products.id]
	}),
	return: one(returns, {
		fields: [returnsProducts.returnsId],
		references: [returns.id]
	}),
}));

export const eventsDirectusUsersRelations = relations(eventsDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [eventsDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	event: one(events, {
		fields: [eventsDirectusUsers.eventsId],
		references: [events.id]
	}),
}));

export const shippingAddressesCitiesRelations = relations(shippingAddressesCities, ({one}) => ({
	city: one(cities, {
		fields: [shippingAddressesCities.citiesId],
		references: [cities.id]
	}),
	shippingAddress: one(shippingAddresses, {
		fields: [shippingAddressesCities.shippingAddressesId],
		references: [shippingAddresses.id]
	}),
}));

export const shippingAddressesCountriesRelations = relations(shippingAddressesCountries, ({one}) => ({
	country: one(countries, {
		fields: [shippingAddressesCountries.countriesId],
		references: [countries.id]
	}),
	shippingAddress: one(shippingAddresses, {
		fields: [shippingAddressesCountries.shippingAddressesId],
		references: [shippingAddresses.id]
	}),
}));

export const shopsAgreementsRelations = relations(shopsAgreements, ({one}) => ({
	shop: one(shops, {
		fields: [shopsAgreements.shopsId],
		references: [shops.id]
	}),
}));

export const shopsShowcasesRelations = relations(shopsShowcases, ({one}) => ({
	shop: one(shops, {
		fields: [shopsShowcases.shopsId],
		references: [shops.id]
	}),
	showcase: one(showcases, {
		fields: [shopsShowcases.showcasesId],
		references: [showcases.id]
	}),
}));

export const shortsFilesRelations = relations(shortsFiles, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [shortsFiles.directusFilesId],
		references: [directusFiles.id]
	}),
	short: one(shorts, {
		fields: [shortsFiles.shortsId],
		references: [shorts.id]
	}),
}));

export const sitePreferenceCategoriesRelations = relations(sitePreferenceCategories, ({one}) => ({
	category: one(categories, {
		fields: [sitePreferenceCategories.categoriesId],
		references: [categories.id]
	}),
}));

export const sitePreferenceProductsRelations = relations(sitePreferenceProducts, ({one}) => ({
	product: one(products, {
		fields: [sitePreferenceProducts.productsId],
		references: [products.id]
	}),
}));

export const listProductsListsRelations = relations(listProductsLists, ({one}) => ({
	listProduct: one(listProducts, {
		fields: [listProductsLists.listProductsId],
		references: [listProducts.id]
	}),
	list: one(lists, {
		fields: [listProductsLists.listsId],
		references: [lists.id]
	}),
}));

export const listProductsRelations = relations(listProducts, ({many}) => ({
	listProductsLists: many(listProductsLists),
}));

export const paymentsCountriesRelations = relations(paymentsCountries, ({one}) => ({
	country: one(countries, {
		fields: [paymentsCountries.countryId],
		references: [countries.id]
	}),
	payment: one(payments, {
		fields: [paymentsCountries.paymentId],
		references: [payments.id]
	}),
}));

export const musicchartDepartmentsRelations = relations(musicchartDepartments, ({one}) => ({
	department: one(departments, {
		fields: [musicchartDepartments.departmentsId],
		references: [departments.id]
	}),
}));

export const listsProductsRelations = relations(listsProducts, ({one}) => ({
	list: one(lists, {
		fields: [listsProducts.listsId],
		references: [lists.id]
	}),
	product: one(products, {
		fields: [listsProducts.productsId],
		references: [products.id]
	}),
}));

export const spacesDepartmentsRelations = relations(spacesDepartments, ({one}) => ({
	department: one(departments, {
		fields: [spacesDepartments.departmentsId],
		references: [departments.id]
	}),
	space: one(spaces, {
		fields: [spacesDepartments.spacesId],
		references: [spaces.id]
	}),
}));

export const subscriptionsProductsRelations = relations(subscriptionsProducts, ({one}) => ({
	product: one(products, {
		fields: [subscriptionsProducts.productsId],
		references: [products.id]
	}),
	subscription: one(subscriptions, {
		fields: [subscriptionsProducts.subscriptionsId],
		references: [subscriptions.id]
	}),
}));

export const statesCitiesRelations = relations(statesCities, ({one}) => ({
	city: one(cities, {
		fields: [statesCities.citiesId],
		references: [cities.id]
	}),
	state: one(states, {
		fields: [statesCities.statesId],
		references: [states.id]
	}),
}));

export const streamsRatingsRelations = relations(streamsRatings, ({one}) => ({
	rating: one(ratings, {
		fields: [streamsRatings.ratingsId],
		references: [ratings.id]
	}),
	stream: one(streams, {
		fields: [streamsRatings.streamsId],
		references: [streams.id]
	}),
}));

export const tagsArticlesRelations = relations(tagsArticles, ({one}) => ({
	article: one(articles, {
		fields: [tagsArticles.articlesId],
		references: [articles.id]
	}),
	tag: one(tags, {
		fields: [tagsArticles.tagsId],
		references: [tags.id]
	}),
}));

export const tagsProductsRelations = relations(tagsProducts, ({one}) => ({
	product: one(products, {
		fields: [tagsProducts.productsId],
		references: [products.id]
	}),
	tag: one(tags, {
		fields: [tagsProducts.tagsId],
		references: [tags.id]
	}),
}));

export const calendarListsRelations = relations(calendarLists, ({one}) => ({
	calendar: one(calendar, {
		fields: [calendarLists.calendarId],
		references: [calendar.id]
	}),
	list: one(lists, {
		fields: [calendarLists.listsId],
		references: [lists.id]
	}),
}));

export const listsFilesRelations = relations(listsFiles, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [listsFiles.directusFilesId],
		references: [directusFiles.id]
	}),
	list: one(lists, {
		fields: [listsFiles.listsId],
		references: [lists.id]
	}),
}));

export const projectsListsRelations = relations(projectsLists, ({one}) => ({
	list: one(lists, {
		fields: [projectsLists.listsId],
		references: [lists.id]
	}),
	project: one(projects, {
		fields: [projectsLists.projectsId],
		references: [projects.id]
	}),
}));

export const videosCommentsRelations = relations(videosComments, ({one}) => ({
	comment: one(comments, {
		fields: [videosComments.commentsId],
		references: [comments.id]
	}),
	video: one(videos, {
		fields: [videosComments.videosId],
		references: [videos.id]
	}),
}));

export const departmentsShowcasesRelations = relations(departmentsShowcases, ({one}) => ({
	department: one(departments, {
		fields: [departmentsShowcases.departmentsId],
		references: [departments.id]
	}),
	showcase: one(showcases, {
		fields: [departmentsShowcases.showcasesId],
		references: [showcases.id]
	}),
}));

export const chatRelations = relations(chat, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [chat.image],
		references: [directusFiles.id]
	}),
	directusUser_userCreated: one(directusUsers, {
		fields: [chat.userCreated],
		references: [directusUsers.id],
		relationName: "chat_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [chat.userUpdated],
		references: [directusUsers.id],
		relationName: "chat_userUpdated_directusUsers_id"
	}),
}));

export const aboutDepartmentsPlatformRelations = relations(aboutDepartmentsPlatform, ({one}) => ({
	platform: one(platform, {
		fields: [aboutDepartmentsPlatform.platformId],
		references: [platform.id]
	}),
}));

export const profilesCountriesRelations = relations(profilesCountries, ({one}) => ({
	country: one(countries, {
		fields: [profilesCountries.countriesId],
		references: [countries.id]
	}),
	profile: one(profiles, {
		fields: [profilesCountries.profilesId],
		references: [profiles.id]
	}),
}));

export const profilesStatesRelations = relations(profilesStates, ({one}) => ({
	profile: one(profiles, {
		fields: [profilesStates.profilesId],
		references: [profiles.id]
	}),
	state: one(states, {
		fields: [profilesStates.statesId],
		references: [states.id]
	}),
}));

export const collectionsSpacesRelations = relations(collectionsSpaces, ({one}) => ({
	collection: one(collections, {
		fields: [collectionsSpaces.collectionsId],
		references: [collections.id]
	}),
	space: one(spaces, {
		fields: [collectionsSpaces.spacesId],
		references: [spaces.id]
	}),
}));

export const listsTemplateRelations = relations(listsTemplate, ({one, many}) => ({
	directusUser_userCreated: one(directusUsers, {
		fields: [listsTemplate.userCreated],
		references: [directusUsers.id],
		relationName: "listsTemplate_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [listsTemplate.userUpdated],
		references: [directusUsers.id],
		relationName: "listsTemplate_userUpdated_directusUsers_id"
	}),
	listsTemplateTags: many(listsTemplateTags),
	listsTemplateDirectusUsers: many(listsTemplateDirectusUsers),
	listsTemplateListItems: many(listsTemplateListItems),
}));

export const projectBoardCommentsRelations = relations(projectBoardComments, ({one}) => ({
	comment: one(comments, {
		fields: [projectBoardComments.commentsId],
		references: [comments.id]
	}),
	projectBoard: one(projectBoard, {
		fields: [projectBoardComments.projectBoardId],
		references: [projectBoard.id]
	}),
}));

export const chartEntriesRelations = relations(chartEntries, ({one}) => ({
	chart: one(charts, {
		fields: [chartEntries.chartId],
		references: [charts.id]
	}),
	product: one(products, {
		fields: [chartEntries.productId],
		references: [products.id]
	}),
}));

export const chartsRelations = relations(charts, ({one, many}) => ({
	chartEntries: many(chartEntries),
	chartsDepartments: many(chartsDepartments),
	chartsProducts: many(chartsProducts),
	chartsRadios: many(chartsRadios),
	directusFile: one(directusFiles, {
		fields: [charts.icon],
		references: [directusFiles.id]
	}),
}));

export const mediaFoldersDirectusUsersRelations = relations(mediaFoldersDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [mediaFoldersDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	mediaFolder: one(mediaFolders, {
		fields: [mediaFoldersDirectusUsers.mediaFoldersId],
		references: [mediaFolders.id]
	}),
}));

export const shortsProductsRelations = relations(shortsProducts, ({one}) => ({
	product: one(products, {
		fields: [shortsProducts.productsId],
		references: [products.id]
	}),
	short: one(shorts, {
		fields: [shortsProducts.shortsId],
		references: [shorts.id]
	}),
}));

export const integrationsPlatformRelations = relations(integrationsPlatform, ({one}) => ({
	integration: one(integrations, {
		fields: [integrationsPlatform.integrationsId],
		references: [integrations.id]
	}),
	platform: one(platform, {
		fields: [integrationsPlatform.platformId],
		references: [platform.id]
	}),
}));

export const geoRegionsCitiesRelations = relations(geoRegionsCities, ({one}) => ({
	city: one(cities, {
		fields: [geoRegionsCities.citiesId],
		references: [cities.id]
	}),
	geoRegion: one(geoRegions, {
		fields: [geoRegionsCities.geoRegionsId],
		references: [geoRegions.id]
	}),
}));

export const geoRegionsRelations = relations(geoRegions, ({many}) => ({
	geoRegionsCities: many(geoRegionsCities),
	geoRegionsStates: many(geoRegionsStates),
	geoRegionsCountries: many(geoRegionsCountries),
}));

export const geoRegionsStatesRelations = relations(geoRegionsStates, ({one}) => ({
	geoRegion: one(geoRegions, {
		fields: [geoRegionsStates.geoRegionsId],
		references: [geoRegions.id]
	}),
	state: one(states, {
		fields: [geoRegionsStates.statesId],
		references: [states.id]
	}),
}));

export const projectsCommentsRelations = relations(projectsComments, ({one}) => ({
	comment: one(comments, {
		fields: [projectsComments.commentsId],
		references: [comments.id]
	}),
	project: one(projects, {
		fields: [projectsComments.projectsId],
		references: [projects.id]
	}),
}));

export const listsTemplatesRelations = relations(listsTemplates, ({one}) => ({
	list: one(lists, {
		fields: [listsTemplates.listsId],
		references: [lists.id]
	}),
	template: one(templates, {
		fields: [listsTemplates.templatesId],
		references: [templates.id]
	}),
}));

export const videosTagsRelations = relations(videosTags, ({one}) => ({
	tag: one(tags, {
		fields: [videosTags.tagsId],
		references: [tags.id]
	}),
	video: one(videos, {
		fields: [videosTags.videosId],
		references: [videos.id]
	}),
}));

export const geoRegionsCountriesRelations = relations(geoRegionsCountries, ({one}) => ({
	country: one(countries, {
		fields: [geoRegionsCountries.countriesId],
		references: [countries.id]
	}),
	geoRegion: one(geoRegions, {
		fields: [geoRegionsCountries.geoRegionsId],
		references: [geoRegions.id]
	}),
}));

export const countriesCurrencyRelations = relations(countriesCurrency, ({one}) => ({
	country: one(countries, {
		fields: [countriesCurrency.countriesId],
		references: [countries.id]
	}),
	currency: one(currency, {
		fields: [countriesCurrency.currencyId],
		references: [currency.id]
	}),
}));

export const projectsCalendarRelations = relations(projectsCalendar, ({one}) => ({
	calendar: one(calendar, {
		fields: [projectsCalendar.calendarId],
		references: [calendar.id]
	}),
	project: one(projects, {
		fields: [projectsCalendar.projectsId],
		references: [projects.id]
	}),
}));

export const integrationsTagsRelations = relations(integrationsTags, ({one}) => ({
	integration: one(integrations, {
		fields: [integrationsTags.integrationsId],
		references: [integrations.id]
	}),
	tag: one(tags, {
		fields: [integrationsTags.tagsId],
		references: [tags.id]
	}),
}));

export const integrationsCategoriesRelations = relations(integrationsCategories, ({one}) => ({
	category: one(categories, {
		fields: [integrationsCategories.categoriesId],
		references: [categories.id]
	}),
	integration: one(integrations, {
		fields: [integrationsCategories.integrationsId],
		references: [integrations.id]
	}),
}));

export const listsTemplateTagsRelations = relations(listsTemplateTags, ({one}) => ({
	listsTemplate: one(listsTemplate, {
		fields: [listsTemplateTags.listsTemplateId],
		references: [listsTemplate.id]
	}),
	tag: one(tags, {
		fields: [listsTemplateTags.tagsId],
		references: [tags.id]
	}),
}));

export const aboutDepartmentsPagesRelations = relations(aboutDepartmentsPages, ({one}) => ({
	page: one(pages, {
		fields: [aboutDepartmentsPages.pagesId],
		references: [pages.id]
	}),
}));

export const aboutDepartmentsArticlesRelations = relations(aboutDepartmentsArticles, ({one}) => ({
	article: one(articles, {
		fields: [aboutDepartmentsArticles.articlesId],
		references: [articles.id]
	}),
}));

export const tagsPostsRelations = relations(tagsPosts, ({one}) => ({
	post: one(posts, {
		fields: [tagsPosts.postsId],
		references: [posts.id]
	}),
	tag: one(tags, {
		fields: [tagsPosts.tagsId],
		references: [tags.id]
	}),
}));

export const integrationsAttributesRelations = relations(integrationsAttributes, ({one}) => ({
	attribute: one(attributes, {
		fields: [integrationsAttributes.attributesId],
		references: [attributes.id]
	}),
	integration: one(integrations, {
		fields: [integrationsAttributes.integrationsId],
		references: [integrations.id]
	}),
}));

export const profilesCitiesRelations = relations(profilesCities, ({one}) => ({
	city: one(cities, {
		fields: [profilesCities.citiesId],
		references: [cities.id]
	}),
	profile: one(profiles, {
		fields: [profilesCities.profilesId],
		references: [profiles.id]
	}),
}));

export const integrationsProductTypesRelations = relations(integrationsProductTypes, ({one}) => ({
	integration: one(integrations, {
		fields: [integrationsProductTypes.integrationsId],
		references: [integrations.id]
	}),
	productType: one(productTypes, {
		fields: [integrationsProductTypes.productTypesId],
		references: [productTypes.id]
	}),
}));

export const eventsPostsRelations = relations(eventsPosts, ({one}) => ({
	event: one(events, {
		fields: [eventsPosts.eventsId],
		references: [events.id]
	}),
	post: one(posts, {
		fields: [eventsPosts.postsId],
		references: [posts.id]
	}),
}));

export const spacesListsRelations = relations(spacesLists, ({one}) => ({
	list: one(lists, {
		fields: [spacesLists.listsId],
		references: [lists.id]
	}),
	space: one(spaces, {
		fields: [spacesLists.spacesId],
		references: [spaces.id]
	}),
}));

export const pollsSpacesRelations = relations(pollsSpaces, ({one}) => ({
	poll: one(polls, {
		fields: [pollsSpaces.pollsId],
		references: [polls.id]
	}),
	space: one(spaces, {
		fields: [pollsSpaces.spacesId],
		references: [spaces.id]
	}),
}));

export const spacesLiveRoomsRelations = relations(spacesLiveRooms, ({one}) => ({
	space: one(spaces, {
		fields: [spacesLiveRooms.spacesId],
		references: [spaces.id]
	}),
}));

export const listItemsDirectusUsersRelations = relations(listItemsDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [listItemsDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	listItem: one(listItems, {
		fields: [listItemsDirectusUsers.listItemsId],
		references: [listItems.id]
	}),
}));

export const calendarIntegrationsRelations = relations(calendarIntegrations, ({one}) => ({
	calendar: one(calendar, {
		fields: [calendarIntegrations.calendarId],
		references: [calendar.id]
	}),
	integration: one(integrations, {
		fields: [calendarIntegrations.integrationsId],
		references: [integrations.id]
	}),
}));

export const projectsIntegrationsRelations = relations(projectsIntegrations, ({one}) => ({
	integration: one(integrations, {
		fields: [projectsIntegrations.integrationsId],
		references: [integrations.id]
	}),
	project: one(projects, {
		fields: [projectsIntegrations.projectsId],
		references: [projects.id]
	}),
}));

export const projectsProductsRelations = relations(projectsProducts, ({one}) => ({
	product: one(products, {
		fields: [projectsProducts.productsId],
		references: [products.id]
	}),
	project: one(projects, {
		fields: [projectsProducts.projectsId],
		references: [projects.id]
	}),
}));

export const calendarCommentsRelations = relations(calendarComments, ({one}) => ({
	calendar: one(calendar, {
		fields: [calendarComments.calendarId],
		references: [calendar.id]
	}),
	comment: one(comments, {
		fields: [calendarComments.commentsId],
		references: [comments.id]
	}),
}));

export const calendarEventsRelations = relations(calendarEvents, ({one}) => ({
	calendar: one(calendar, {
		fields: [calendarEvents.calendarId],
		references: [calendar.id]
	}),
	event: one(events, {
		fields: [calendarEvents.eventsId],
		references: [events.id]
	}),
}));

export const memberGroupsPostsRelations = relations(memberGroupsPosts, ({one}) => ({
	post: one(posts, {
		fields: [memberGroupsPosts.postsId],
		references: [posts.id]
	}),
}));

export const memberGroupsPollsRelations = relations(memberGroupsPolls, ({one}) => ({
	poll: one(polls, {
		fields: [memberGroupsPolls.pollsId],
		references: [polls.id]
	}),
}));

export const memberGroupsEventsRelations = relations(memberGroupsEvents, ({one}) => ({
	event: one(events, {
		fields: [memberGroupsEvents.eventsId],
		references: [events.id]
	}),
}));

export const memberGroupsProductsRelations = relations(memberGroupsProducts, ({one}) => ({
	product: one(products, {
		fields: [memberGroupsProducts.productsId],
		references: [products.id]
	}),
}));

export const showcasesSpacesRelations = relations(showcasesSpaces, ({one}) => ({
	showcase: one(showcases, {
		fields: [showcasesSpaces.showcasesId],
		references: [showcases.id]
	}),
	space: one(spaces, {
		fields: [showcasesSpaces.spacesId],
		references: [spaces.id]
	}),
}));

export const attributesProductTypesRelations = relations(attributesProductTypes, ({one}) => ({
	attribute: one(attributes, {
		fields: [attributesProductTypes.attributesId],
		references: [attributes.id]
	}),
	productType: one(productTypes, {
		fields: [attributesProductTypes.productTypesId],
		references: [productTypes.id]
	}),
}));

export const productAttributesRelations = relations(productAttributes, ({one}) => ({
	attribute: one(attributes, {
		fields: [productAttributes.attributeId],
		references: [attributes.id]
	}),
	product: one(products, {
		fields: [productAttributes.productId],
		references: [products.id]
	}),
}));

export const listsTypeListsRelations = relations(listsTypeLists, ({one}) => ({
	list: one(lists, {
		fields: [listsTypeLists.listsId],
		references: [lists.id]
	}),
	listsType: one(listsType, {
		fields: [listsTypeLists.listsTypeId],
		references: [listsType.id]
	}),
}));

export const listsTypeRelations = relations(listsType, ({one, many}) => ({
	listsTypeLists: many(listsTypeLists),
	directusUser_userCreated: one(directusUsers, {
		fields: [listsType.userCreated],
		references: [directusUsers.id],
		relationName: "listsType_userCreated_directusUsers_id"
	}),
	directusUser_userUpdated: one(directusUsers, {
		fields: [listsType.userUpdated],
		references: [directusUsers.id],
		relationName: "listsType_userUpdated_directusUsers_id"
	}),
	listsTypeCategories: many(listsTypeCategories),
}));

export const listsTypeCategoriesRelations = relations(listsTypeCategories, ({one}) => ({
	category: one(categories, {
		fields: [listsTypeCategories.categoriesId],
		references: [categories.id]
	}),
	listsType: one(listsType, {
		fields: [listsTypeCategories.listsTypeId],
		references: [listsType.id]
	}),
}));

export const chartsDepartmentsRelations = relations(chartsDepartments, ({one}) => ({
	chart: one(charts, {
		fields: [chartsDepartments.chartsId],
		references: [charts.id]
	}),
	department: one(departments, {
		fields: [chartsDepartments.departmentsId],
		references: [departments.id]
	}),
}));

export const chartsProductsRelations = relations(chartsProducts, ({one}) => ({
	chart: one(charts, {
		fields: [chartsProducts.chartsId],
		references: [charts.id]
	}),
	product: one(products, {
		fields: [chartsProducts.productsId],
		references: [products.id]
	}),
}));

export const listsDepartmentsRelations = relations(listsDepartments, ({one}) => ({
	department: one(departments, {
		fields: [listsDepartments.departmentsId],
		references: [departments.id]
	}),
	list: one(lists, {
		fields: [listsDepartments.listsId],
		references: [lists.id]
	}),
}));

export const chartsRadiosRelations = relations(chartsRadios, ({one}) => ({
	chart: one(charts, {
		fields: [chartsRadios.chartsId],
		references: [charts.id]
	}),
	radio: one(radios, {
		fields: [chartsRadios.radiosId],
		references: [radios.id]
	}),
}));

export const listsCategoriesRelations = relations(listsCategories, ({one}) => ({
	category: one(categories, {
		fields: [listsCategories.categoriesId],
		references: [categories.id]
	}),
	list: one(lists, {
		fields: [listsCategories.listsId],
		references: [lists.id]
	}),
}));

export const listsShortsRelations = relations(listsShorts, ({one}) => ({
	list: one(lists, {
		fields: [listsShorts.listsId],
		references: [lists.id]
	}),
	short: one(shorts, {
		fields: [listsShorts.shortsId],
		references: [shorts.id]
	}),
}));

export const videosCategoriesRelations = relations(videosCategories, ({one}) => ({
	category: one(categories, {
		fields: [videosCategories.categoriesId],
		references: [categories.id]
	}),
	video: one(videos, {
		fields: [videosCategories.videosId],
		references: [videos.id]
	}),
}));

export const spacesDirectusUsersRelations = relations(spacesDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [spacesDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	space: one(spaces, {
		fields: [spacesDirectusUsers.spacesId],
		references: [spaces.id]
	}),
}));

export const videosDepartmentsRelations = relations(videosDepartments, ({one}) => ({
	department: one(departments, {
		fields: [videosDepartments.departmentsId],
		references: [departments.id]
	}),
	video: one(videos, {
		fields: [videosDepartments.videosId],
		references: [videos.id]
	}),
}));

export const videosProductTypesRelations = relations(videosProductTypes, ({one}) => ({
	productType: one(productTypes, {
		fields: [videosProductTypes.productTypesId],
		references: [productTypes.id]
	}),
	video: one(videos, {
		fields: [videosProductTypes.videosId],
		references: [videos.id]
	}),
}));

export const shopTypeShopsRelations = relations(shopTypeShops, ({one}) => ({
	shopType: one(shopType, {
		fields: [shopTypeShops.shopTypeId],
		references: [shopType.id]
	}),
	shop: one(shops, {
		fields: [shopTypeShops.shopsId],
		references: [shops.id]
	}),
}));

export const auctionLotsRelations = relations(auctionLots, ({one, many}) => ({
	product: one(products, {
		fields: [auctionLots.productId],
		references: [products.id]
	}),
	bids: many(bids),
}));

export const variantsRelations = relations(variants, ({one}) => ({
	product: one(products, {
		fields: [variants.productId],
		references: [products.id]
	}),
}));

export const showcasesProductsRelations = relations(showcasesProducts, ({one}) => ({
	product: one(products, {
		fields: [showcasesProducts.productsId],
		references: [products.id]
	}),
	showcase: one(showcases, {
		fields: [showcasesProducts.showcasesId],
		references: [showcases.id]
	}),
}));

export const directusSettingsRelations = relations(directusSettings, ({one}) => ({
	directusFile_projectLogo: one(directusFiles, {
		fields: [directusSettings.projectLogo],
		references: [directusFiles.id],
		relationName: "directusSettings_projectLogo_directusFiles_id"
	}),
	directusFile_publicBackground: one(directusFiles, {
		fields: [directusSettings.publicBackground],
		references: [directusFiles.id],
		relationName: "directusSettings_publicBackground_directusFiles_id"
	}),
	directusFile_publicFavicon: one(directusFiles, {
		fields: [directusSettings.publicFavicon],
		references: [directusFiles.id],
		relationName: "directusSettings_publicFavicon_directusFiles_id"
	}),
	directusFile_publicForeground: one(directusFiles, {
		fields: [directusSettings.publicForeground],
		references: [directusFiles.id],
		relationName: "directusSettings_publicForeground_directusFiles_id"
	}),
	directusRole: one(directusRoles, {
		fields: [directusSettings.publicRegistrationRole],
		references: [directusRoles.id]
	}),
	directusFolder: one(directusFolders, {
		fields: [directusSettings.storageDefaultFolder],
		references: [directusFolders.id]
	}),
}));

export const listsTemplateDirectusUsersRelations = relations(listsTemplateDirectusUsers, ({one}) => ({
	directusUser: one(directusUsers, {
		fields: [listsTemplateDirectusUsers.directusUsersId],
		references: [directusUsers.id]
	}),
	listsTemplate: one(listsTemplate, {
		fields: [listsTemplateDirectusUsers.listsTemplateId],
		references: [listsTemplate.id]
	}),
}));

export const listsTemplateListItemsRelations = relations(listsTemplateListItems, ({one}) => ({
	listItem: one(listItems, {
		fields: [listsTemplateListItems.listItemsId],
		references: [listItems.id]
	}),
	listsTemplate: one(listsTemplate, {
		fields: [listsTemplateListItems.listsTemplateId],
		references: [listsTemplate.id]
	}),
}));

export const federatedSpacesSpacesRelations = relations(federatedSpacesSpaces, ({one}) => ({
	federatedSpace: one(federatedSpaces, {
		fields: [federatedSpacesSpaces.federatedSpacesId],
		references: [federatedSpaces.id]
	}),
	space: one(spaces, {
		fields: [federatedSpacesSpaces.spacesId],
		references: [spaces.id]
	}),
}));

export const federatedSpacesRelations = relations(federatedSpaces, ({many}) => ({
	federatedSpacesSpaces: many(federatedSpacesSpaces),
}));

export const bidsRelations = relations(bids, ({one}) => ({
	auctionLot: one(auctionLots, {
		fields: [bids.lotId],
		references: [auctionLots.id]
	}),
}));

export const mediaFilesRelations = relations(mediaFiles, ({one}) => ({
	directusFile: one(directusFiles, {
		fields: [mediaFiles.directusFilesId],
		references: [directusFiles.id]
	}),
	media: one(media, {
		fields: [mediaFiles.mediaId],
		references: [media.id]
	}),
}));

export const vibezProductMapRelations = relations(vibezProductMap, ({one}) => ({
	vibezClip: one(vibezClips, {
		fields: [vibezProductMap.clipId],
		references: [vibezClips.id]
	}),
	product: one(products, {
		fields: [vibezProductMap.productId],
		references: [products.id]
	}),
}));

export const vibezClipsRelations = relations(vibezClips, ({many}) => ({
	vibezProductMaps: many(vibezProductMap),
}));