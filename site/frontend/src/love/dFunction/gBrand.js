import tadpole from "@/love/hAsset/business/4.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: tadpole,
			name: "Tadpole Organisation",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand