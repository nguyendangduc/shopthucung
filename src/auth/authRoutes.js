const authRoutes = {
  admin: '*',
  user: ['RULE_USER', 'RULE_DBA'],
  onlyGuest: []
}

export default authRoutes;