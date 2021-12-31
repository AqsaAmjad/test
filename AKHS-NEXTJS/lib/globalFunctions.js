import localDictionary from '../dictionary/dictionary.json'

export function languageSwitcher(newLanguage, linkHierarchy)
{
	// console.log(linkHierarchy.link)
	// let link = url
	// link = link.split('/')
	// for (let index = 0; index < link.length; index++) {
	// 	let element = link[index];
	// 	if(element == currentLanguage)
	// 	{
	// 		link[index] = newLanguage
	// 	}
	// }
	// link = link.join('/')
	let link = '#'
	if(linkHierarchy && linkHierarchy.link && linkHierarchy.link._allSlugLocales)
	{
		let slug1 = ''
		Object.keys(linkHierarchy.link._allSlugLocales).map((key => {
			const level1 = linkHierarchy.link._allSlugLocales[key]
			// console.log(level1)
			if(level1.locale == newLanguage)
			{
				link = level1.value
				slug1 = level1.value
			}
		}))
		if(linkHierarchy.parent != null)
		{
			// link = linkHierarchy.parent.link.slug + '/' + slug1;
			let slug2 = "";
			Object.keys(linkHierarchy.parent.link._allSlugLocales).map((key => {
				const level1 = linkHierarchy.parent.link._allSlugLocales[key]
				if(level1.locale == newLanguage)
				{
					link = level1.value + '/' + slug1;
					slug2 = level1.value + '/' + slug1
				}
			}))
			if(linkHierarchy.parent.parent != null)
			{
				// link = linkHierarchy.parent.parent.link.slug + '/' + slug2;
				let slug3 = "";
				Object.keys(linkHierarchy.parent.parent.link._allSlugLocales).map((key => {
					const level1 = linkHierarchy.parent.parent.link._allSlugLocales[key]
					if(level1.locale == newLanguage)
					{
						link = level1.value + '/' + slug2;
						slug3 = level1.value + '/' + slug2
					}
				}))
				if(linkHierarchy.parent.parent.parent != null)
				{
					link = linkHierarchy.parent.parent.parent.link.slug + '/' + slug3;
					let slug4 = "";
					Object.keys(linkHierarchy.parent.parent.parent.link._allSlugLocales).map((key => {
						const level1 = linkHierarchy.parent.parent.parent.link._allSlugLocales[key]
						if(level1.locale == newLanguage)
						{
							link = level1.value + '/' + slug3;
							slug4 = level1.value + '/' + slug3
						}
					}))
				}
			}
		}
	}
	else
	{
		if(typeof window !== "undefined")
		{
			let temp = []
			temp = window.location.pathname.split('/')
			temp.splice(0, 2);
			temp.splice(-1)
			// console.log(temp)
			link = temp[0] + '/' + linkHierarchy
		}
		if(linkHierarchy && linkHierarchy.parent && linkHierarchy.parent.allConfigPostTypes && linkHierarchy.parent.allConfigPostTypes[0] && linkHierarchy.current)
		{
			// console.log(linkHierarchy.parent.allConfigPostTypes[0])
			let link1 = ''
			let link2 = ''
			Object.keys(linkHierarchy.current).map((key => {
				const singleItem = linkHierarchy.current[key]
				if(singleItem[0])
				{	
					Object.keys(singleItem[0]._allSlugLocales).map((key2 => {
						const singleLocale = singleItem[0]._allSlugLocales[key2]
						if(singleLocale.locale == newLanguage)
						{
							link2 = singleLocale.value
						}
					}))
					
				}
			}))
			Object.keys(linkHierarchy.parent.allConfigPostTypes[0]._allPostTypeSlugLocales).map((key2 => {
				const singleLocale = linkHierarchy.parent.allConfigPostTypes[0]._allPostTypeSlugLocales[key2]
				// console.log(singleLocale)
				if(singleLocale.locale == newLanguage)
				{
					link1 = singleLocale.value
				}
			}))
			link = link1 + '/' + link2

		}
	}
	link = '/' + newLanguage + '/' + link
	// console.log(link)
	return link;
}

export function breadcrumbMaker(newLanguage, linkHierarchy)
{
	// console.log(linkHierarchy)

	let link = ''
	let breadcrumbObject = []
	if(linkHierarchy && linkHierarchy.link && linkHierarchy.link._allStandardPageTitleLocales)
	{
		let slug1 = ''
		Object.keys(linkHierarchy.link._allStandardPageTitleLocales).map((key => {
			const level1 = linkHierarchy.link._allStandardPageTitleLocales[key]
			const level1Slug = linkHierarchy.link._allSlugLocales[key]
			let temp = {}
			// console.log(level1)
			if(level1Slug.locale == newLanguage)
			{
				link = level1Slug.value
				slug1 = level1Slug.value
				temp["title"] = level1.value
				// temp["slug"] = '/' + newLanguage + '/' + level1Slug.value
				breadcrumbObject.push(temp)
			}
		}))
		if(linkHierarchy.parent != null)
		{
			// link = linkHierarchy.parent.link.slug + '/' + slug1;
			let slug2 = "";
			Object.keys(linkHierarchy.parent.link._allStandardPageTitleLocales).map((key => {
				const level1 = linkHierarchy.parent.link._allStandardPageTitleLocales[key]
				const level1Slug = linkHierarchy.parent.link._allSlugLocales[key]
				let temp = {}
				if(level1Slug.locale == newLanguage)
				{
					link = level1Slug.value + '/' + slug1;
					slug2 = level1Slug.value + '/' + slug1
					temp["title"] = level1.value
					// temp["slug"] = '/' + newLanguage + '/' + link
					breadcrumbObject.push(temp)
				}
			}))
			if(linkHierarchy.parent.parent != null)
			{
				// link = linkHierarchy.parent.parent.link.slug + '/' + slug2;
				let slug3 = "";
				Object.keys(linkHierarchy.parent.parent.link._allStandardPageTitleLocales).map((key => {
					const level1 = linkHierarchy.parent.parent.link._allStandardPageTitleLocales[key]
					const level1Slug = linkHierarchy.parent.parent.link._allSlugLocales[key]
					let temp = {}
					if(level1Slug.locale == newLanguage)
					{
						// console.log(level1)
						link = level1Slug.value + '/' + slug2;
						slug3 = level1Slug.value + '/' + slug2
						temp["title"] = level1.value
						// temp["slug"] = '/' + newLanguage + '/' + link
						breadcrumbObject.push(temp)
					}
				}))
				if(linkHierarchy.parent.parent.parent != null)
				{
					link = linkHierarchy.parent.parent.parent.link.slug + '/' + slug3;
					let slug4 = "";
					Object.keys(linkHierarchy.parent.parent.parent.link._allStandardPageTitleLocales).map((key => {
						const level1 = linkHierarchy.parent.parent.parent.link._allStandardPageTitleLocales[key]
						const level1Slug = linkHierarchy.parent.parent.parent.link._allSlugLocales[key]
						let temp = {}
						if(level1Slug.locale == newLanguage)
						{
							link = level1Slug.value + '/' + slug3;
							slug4 = level1Slug.value + '/' + slug3
							temp["title"] = level1.value
							// temp["slug"] = '/' + newLanguage + '/' + link
							breadcrumbObject.push(temp)
						}
					}))
				}
			}
		}
	}
	else
	{
		if(linkHierarchy && linkHierarchy.parent && linkHierarchy.parent.allConfigPostTypes && linkHierarchy.parent.allConfigPostTypes[0] && linkHierarchy.current)
		{
			// console.log(linkHierarchy.parent.allConfigPostTypes[0])
			Object.keys(linkHierarchy.current).map((key => {
				const singleItem = linkHierarchy.current[key]
				if(singleItem[0])
				{
					Object.keys(singleItem[0]._allSlugLocales).map((key2 => {
						const singleLocale = singleItem[0]._allSlugLocales[key2]
						if(singleLocale.locale == newLanguage)
						{
							let temp = {}
							link = linkHierarchy.parent.allConfigPostTypes[0].postTypeSlug + '/' + singleLocale.value
							temp["title"] = singleItem[0]._allTitleLocales[key2].value
							breadcrumbObject.push(temp)
						}
						// console.log(link)
					}))
					
				}
			}))
			// console.log(link)
			// let temp = {}
			// temp["title"] = linkHierarchy.title
			// breadcrumbObject.push(temp)
			let temp = {}
			temp["title"] = linkHierarchy.parent.allConfigPostTypes[0].postTypeTitle
			breadcrumbObject.push(temp)
			// console.log(link)

		}
		// console.log(linkHierarchy)
	}
	// link = '/' + newLanguage + '/' + link
	link = link.split('/')
	// console.log(link)

	Object.keys(breadcrumbObject).map((key => {
		const singleItem = breadcrumbObject[key]
		let temp = '/' + newLanguage
		// console.log(singleItem)
		Object.keys(link).map((key2 => {
			const singleItem2 = link[key2]
			// console.log(singleItem2)
			temp = temp + '/' + singleItem2
		}))
		// console.log(link)
		link.splice(-1)
		// console.log(link)
		breadcrumbObject[key]['slug'] = temp
	}))
	
	// console.log(breadcrumbObject)

	return breadcrumbObject;
}

export function makeLinkFromSlug(linkHierarchy, language)
{
  	// console.log(linkHierarchy)
	let link = '#'
	if(linkHierarchy)
	{
		link = linkHierarchy.link.slug;
		let slug1 = link;
		if(linkHierarchy.parent != null)
		{
			link = linkHierarchy.parent.link.slug + '/' + slug1;
			let slug2 = link;
			if(linkHierarchy.parent.parent != null)
			{
				link = linkHierarchy.parent.parent.link.slug + '/' + slug2;
				let slug3 = link;
				if(linkHierarchy.parent.parent.parent != null)
				{
					link = linkHierarchy.parent.parent.parent.link.slug + '/' + slug3;
					let slug4 = link;
				}
			}
		}
	}
	link = '/' + language + '/' + link
	// console.log(link)
	return link
}

export function makeLinkForTagPage(tag, language)
{
	let link = '#'
	let lowerCategory = tag.category ? tag.category.toLowerCase() : ''
	lowerCategory = lowerCategory.replace(/ /g, "_")
	if(tag.connectedPage)
	{
		link = tag.connectedPage.link.slug;
	}
	link = '/' + language + "/tag-page/"+ tag.tagSlug
	// console.log(link)
	return link
}

export function replacePlaceholders(inputString) {
	var d = new Date();
  	var currentYear = d.getFullYear();
	var replacements = {
		"%YEAR%": currentYear,
		"%COPYRIGHT%": "©",
	},

	str = inputString.replace(/%\w+%/g, function(all) {
		return replacements[all] || all;
	});
	return str;
}

export function isValidUrl(inputString)
{
	var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(inputString);
	return valid
}

export function addFocalPoint(x, y) {
	return `${x * 100}% ${y * 100}%`
}

export function capitalize(inputString)
{
    let words = inputString.split(" ");

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}

	words = words.join(" ");
	return words
}

export function sortRelevantPosts(posts, tags) {
	
	let oldList = posts.data.allPressReleases
	let newList = []

	oldList.sort(function (a, b) {
		return (tags[a.tags] || 0) - (tags[b.id] || 0) || a.title.localeCompare(b.title);
	});
	console.log(oldList)
	console.log(tags)
}

export function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
	  return index === 0 ? word.toLowerCase() : word.toUpperCase();
	}).replace(/\s+/g, '');
}

export function customSeoTags(localSeo, globalSeo) {
	// console.log(localSeo)
	// console.log(globalSeo)
	var seoDictionary = {}
	if(globalSeo)
	{
		Object.keys(globalSeo).map((key => {
			const singleItem = globalSeo[key]
			// console.log(singleItem)
			if(singleItem.enable)
			{
				let metaData = {}
				metaData[singleItem.keyType] = singleItem.key
				if(singleItem.value && singleItem.value != '')
				{
					metaData[singleItem.valueType] = singleItem.value
				}
				else
				{
					metaData[singleItem.valueType] = singleItem.defaultValue
				}
				// console.log(metaData)
				seoDictionary[singleItem.key] = metaData
			}
		}))
	}
	if(localSeo)
	{
		Object.keys(localSeo).map((key => {
			const singleItem = localSeo[key]
			// console.log(singleItem)
			if(singleItem.enable)
			{
				let metaData = {}
				metaData[singleItem.keyType] = singleItem.key
				if(singleItem.value && singleItem.value != '')
				{
					metaData[singleItem.valueType] = singleItem.value
				}
				else
				{
					metaData[singleItem.valueType] = singleItem.defaultValue
				}
				// console.log(metaData)
				seoDictionary[singleItem.key] = metaData
			}
			
		}))
	}
	// console.log(seoDictionary)
	return (
		<>
			{
				Object.keys(seoDictionary).map((key => {
					const singleItem = seoDictionary[key]
					return(
						<>
							<meta {...singleItem} />
						</>
					)
				}))
			}
		</>
	)
	// let a = "<p>abc</p>"
	// return a;
}

export function dictionaryFunction(string, pageLevel, datoDictionary) {
	// console.log(localDictionary)
	// console.log(string)
	// console.log(pageLevel)
	// console.log(datoDictionary)
	// const localDictionary = import('../dictionary/dictionary.json')
	// .then((result) =>{
	// 	console.log(result)
	// });
	// console.log(localDictionary)

	function runJsCode(str) {
		// console.log(str)
		try {
			return eval(str)
			// console.log(eval(str))
		} 
		catch (error) {
			return false
		}
	}

	let str = ''
	if(string)
	{
		str = string.replace(/%\w+%/g, function(key) {
			let updatedKey = key.replace(/%/g,'')
			// console.log(updatedKey)
			let found = false
			if(pageLevel && found == false)
			{
				// found = true
				// return capitalize(pageLevel)
				// console.log(pageLevel)
				if(pageLevel[updatedKey])
				{
					found = true
					return pageLevel[updatedKey]
				}
			}
			if(datoDictionary && found == false)
			{
				if(datoDictionary[updatedKey] && datoDictionary[updatedKey].enable)
				{
	
					if(datoDictionary[updatedKey].value && datoDictionary[updatedKey].value != '')
					{
						// console.log(datoDictionary[updatedKey].value)
						// return datoDictionary[updatedKey].value
						if(datoDictionary[updatedKey].value.includes("%javascript:"))
						{
							let jsCode = datoDictionary[updatedKey].value.split('=')
							jsCode = runJsCode(jsCode[1])
							if(jsCode)
							{
								found = true
								return jsCode
							}
						}
						else
						{
							found = true
							return datoDictionary[updatedKey].value
						}
					}
					else
					{
						found = true
						return datoDictionary[updatedKey].defaultValue
					}
					// return datoDictionary[updatedKey]
				}
			}
			if(localDictionary && found == false)
			{
				if(localDictionary[updatedKey] && localDictionary[updatedKey].enable)
				{
	
					if(localDictionary[updatedKey].value && localDictionary[updatedKey].value != '')
					{
						// found = true
						// return localDictionary[updatedKey].value
						if(localDictionary[updatedKey].value.includes("%javascript:"))
						{
							let jsCode = localDictionary[updatedKey].value.split('=')
							jsCode = runJsCode(jsCode[1])
							if(jsCode)
							{
								found = true
								return jsCode
							}
						}
						else
						{
							found = true
							return localDictionary[updatedKey].value
						}
					}
					else
					{
						found = true
						return localDictionary[updatedKey].defaultValue
					}
				}
			}
			if(found == false)
			{
				return "?"+updatedKey+"?"
			}
		});
	}
	
	// console.log(str)
	return str
}