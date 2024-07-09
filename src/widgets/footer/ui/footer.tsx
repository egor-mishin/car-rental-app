import { CustomLink, Htag, Logo, P } from '@/shared/ui';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.wrap}>
					<div className={styles.logo}>
						<Logo />
						<P size="s">
							Our vision is to provide convenience and help increase your sales business.
						</P>
					</div>
					<div className={styles.footerMenu}>
						<div className={styles.col}>
							<Htag tag="h5">About</Htag>
							<ul className={styles.footerMenuList}>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										How it works
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Featured
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Partnership
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Business Relation
									</CustomLink>
								</li>
							</ul>
						</div>

						<div className={styles.col}>
							<Htag tag="h5">Community</Htag>
							<ul className={styles.footerMenuList}>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Events
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Blog
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Podcast
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Invite a friend
									</CustomLink>
								</li>
							</ul>
						</div>

						<div className={styles.col}>
							<Htag tag="h5">Socials</Htag>
							<ul className={styles.footerMenuList}>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Discord
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Instagram
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Twitter
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="#"
										appearance="regular"
										className={styles.footerLink}
										title="How it works"
									>
										Facebook
									</CustomLink>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={styles.copyright}>
					<P size="s">Copyright © 2024 Car Rental App. All rights reserved.</P>
					<div className={styles.credits}>
						<CustomLink
							url="#"
							appearance="regular"
							className={styles.copyrightLink}
							title="Privacy Policy"
						>
							Privacy Policy
						</CustomLink>
						<CustomLink
							url="#"
							appearance="regular"
							className={styles.copyrightLink}
							title="Terms of Service"
						>
							Terms of Service
						</CustomLink>
						<CustomLink
							url="#"
							appearance="regular"
							className={styles.copyrightLink}
							title="Terms of Service"
						>
							Cookie Policy
						</CustomLink>
					</div>
				</div>
			</div>
		</footer>
	);
};
