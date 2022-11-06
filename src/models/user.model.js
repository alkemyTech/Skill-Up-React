export class User {
	constructor(props) {
		this.separator = '?accountId=';
		this.id = props.id;
		this.last_name = props.last_name;
		this.email = props.email;
		this.password = props.password;
		this.points = props.points;
		this.roleId = props.roleId;
		this.createdAt = new Date(props.createdAt);
		this.updatedAt = new Date(props.updatedAt);

		const { first_name_decoded, accountId, first_name } = this.parseFirstName(props.first_name);
		this.first_name = first_name;
		this.first_name_decoded = first_name_decoded || '';
		this.accountId = accountId;
	}

	static create(props) {
		return new User({ ...props });
	}

	assignAccount(accountId) {
		const { accountId: accountIdAlreadyAssigned, first_name } = this.parseFirstName(this.first_name);

		if (accountIdAlreadyAssigned) {
			return User.create({ ...this });
		}

		return User.create({
			...this,
			first_name: JSON.stringify({ first_name, accountId }),
		});
	}

	parseFirstName(firstNameEncoded = '') {
		let firstNameParsed;

		try {
			firstNameParsed = JSON.parse(firstNameEncoded);

			if (typeof firstNameParsed === 'object') {
				const { first_name, accountId } = firstNameParsed;
				return { first_name_decoded: first_name, accountId, first_name: firstNameEncoded };
			}
			return { first_name_decoded: firstNameEncoded, accountId: null, first_name: firstNameEncoded };
		} catch (e) {
			return { first_name_decoded: firstNameEncoded, accountId: null, first_name: firstNameEncoded };
		}
	}
}
