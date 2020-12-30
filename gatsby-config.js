module.exports = {
	siteMetadata: {
		title: `ABM`,
		description: `Ana Bermudez Website`,
		siteUrl: `https://anabermudez.netlify.app/`,
		author: `Ana Bermudez Monteagudo`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/antitle1.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /images\/icons/
				}
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					'syne',
					'sans-serif',
					'Special Elite',
					'cursive',

					'Montserrat',
					'sans-serif',
					'Space Grotesk',
					'sans-serif',
					`source sans pro\:300,400,400i,700`,
					'Bungee Outline',
					'Hanalei Fill',
					'cursive',
					'Hanalei Fill',
					'cursive',
					'Monoton'
				],
				display: 'swap'
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
