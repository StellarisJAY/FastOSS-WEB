import sha1 from 'js-sha1'
const TokenKey = 'Admin-Token'
const bucketTokenKey = 'bucket-token'


export function getBucketToken(){
	return localStorage.getItem(bucketTokenKey)
}

export function getAdminToken(){
	return localStorage.getItem(TokenKey)
}

export function setBucketToken(token){
	localStorage.setItem(bucketTokenKey, token)
}

export function setAdminToken(token){
	localStorage.setItem(TokenKey, token)
}

/**
 * SHA-1 摘要算法
 * @param {Object} accessKey ak
 * @param {Object} secretKey sk
 * @param {Object} endTime endTime
 */
function digest(accessKey, secretKey, endTime){
	let digest = sha1(secretKey + endTime)
	return digest
}

/**
 * 生成访问存储桶的Token
 * @param {Object} accessKey 存储桶AccessKey
 * @param {Object} secretKey 存储桶SecretKey
 */
export function generateBucketToken(accessKey, secretKey){
	let endTime = new Date().getTime()
	let signature = digest(accessKey, secretKey, endTime)
	let token = accessKey + ';' + endTime + ';' + 'alg=sha;' + 'sig=' + signature
	console.log(token)
	return token
}
